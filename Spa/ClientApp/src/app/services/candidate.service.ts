import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from 'src/app/models/candidate';
import { Race } from '../models/Race';
import { BallotIssue } from '../models/BallotIssue';

const clientsUrl = "https://localhost:5001/api/candidates";              //DEV AND TESTING
//const clientsUrl = "http://cityvote.azurewebsites.net/api/candidates"     //PRODUCTION

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  races = [];
  candidates = [];

  constructor(private http: HttpClient) {}

  getRaces() {
    const url = `${clientsUrl}`
    return this.http.get<Race[]>("https://localhost:5001/api/races");
  }

  getCandidates() {
    const url = `${clientsUrl}`
	  return this.http.get<Candidate[]>(url);
  }

  getCandidate(id: number) {
    const url = `${clientsUrl}/${id}`;
    return this.http.get<Candidate>(url);
  }

  getBallotIssues() {
    const url = "https://localhost:5001/api/ballotissues";
    return this.http.get<BallotIssue[]>(url);

  }
  getSingle<T>(id: number) {
    return this.http.get<T>(`https://localhost:5001/api/candidates/${id}`);
  }
}
