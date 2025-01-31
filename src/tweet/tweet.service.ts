import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly usersService: UsersService){};

    tweets: { text: string, date: Date, userId: number }[] = 
        [
            { text: 'Hello World!', date: new Date('2024-11-12'), userId: 1 },
            { text: 'This is a tweet!', date: new Date('2025-01-30'), userId: 1 },
            { text: 'This is another tweet!', date: new Date('2024-10-05'), userId: 2 },
        ];
    
    getTweets(userId: number) {
        // return this.tweets.filter(tweet => tweet.userId === userId);
        const user = this.usersService.getUsersById(userId);
        const tweets = this.tweets.filter(tweet => tweet.userId === userId);
        const response = tweets.map(tweet => {
            return {
                text: tweet.text,
                date: tweet.date,
                name: user.name,
            }
        })

        return response;
    }
}