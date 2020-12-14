import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PostsModule],
})
export class AppModule {}
