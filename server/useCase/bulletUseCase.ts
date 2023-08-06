import type { UserId } from '$/commonTypesWithClient/branded';
import type { BulletModel } from '$/commonTypesWithClient/models';
import { bulletsRepository } from '$/repository/bulletsRepository';
import { gamesRepository } from '$/repository/gamesRepository';
import { bulletIdParser } from '$/service/idParsers';
import { randomUUID } from 'crypto';
import { playerUseCase } from './playerUseCase';

export const bulletUseCase = {
  create: async (playerId: UserId): Promise<BulletModel | null> => {
    console.log('bulletUseCase.create');
    const player = await playerUseCase.getStatus(playerId, null);
    if (player !== null) {
      const newBullet: BulletModel = {
        id: bulletIdParser.parse(randomUUID()),
        createdPosition: {
          ...player.position,
        },
        direction: 0,
        type: 0,
        playerId,
        createdAt: Date.now(),
      };
      await bulletsRepository.create(newBullet);
      return newBullet;
    }
    return null;
  },
  delete: async () => {
    const bullets = await bulletsRepository.findAll();
    const game = await gamesRepository.find();
    const maxXPosition = game?.displayNumber ?? 1 * 1920;
    const deleteBullets = bullets.filter(
      (bullet) =>
        bullet.createdPosition.x + (bullet.createdAt - new Date().getTime()) * 300 > maxXPosition
    );
    deleteBullets.forEach((bullet) => {
      bulletsRepository.delete(bullet.id);
    });
  },
};
