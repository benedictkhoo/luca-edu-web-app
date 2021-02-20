import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Question } from './question.model';

@Injectable()
export class QuestionService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/questions`;
  }

  async listAll(start: number): Promise<Question[]> {
    return this.httpClient.get(`${this.apiUrl}?start=${start}`).toPromise()
      .then((questions) => questions as Question[]);
  }

  async create(question: Question): Promise<void> {
    await this.httpClient.post(this.apiUrl, {
      title: question.title,
      content: question.content
    }).toPromise();
  }

  async like(id: string, like: boolean): Promise<void> {
    await this.httpClient.put(`${this.apiUrl}/${id}`, {
      liked: like,
      disliked: false
    }).toPromise();
  }

  async dislike(id: string, dislike: boolean): Promise<void> {
    await this.httpClient.put(`${this.apiUrl}/${id}`, {
      liked: false,
      disliked: dislike
    }).toPromise();
  }

  async star(id: string, star: boolean): Promise<void> {
    await this.httpClient.put(`${this.apiUrl}/${id}`, {
      starred: star
    }).toPromise();
  }
}
