import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log(`ANALYTICS SERVICES - New User created!`, data);
    this.analytics.push({
      username: data.username,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    const data = {
      error: false,
      data: this.analytics,
    };
    return data;
  }
}
