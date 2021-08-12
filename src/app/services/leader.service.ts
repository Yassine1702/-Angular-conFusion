import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leaders';
import { Leader } from '../shared/leader';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    return Promise.resolve(Leaders);
  }
  
  getLeader(id:String): Promise<Leader>{
      return Promise.resolve(Leaders.filter((leader) => (leader.id === id))[0]);
  }

  getFeaturedLeader():Promise<Leader> {
    return Promise.resolve( Leaders.filter((leader) => (leader.featured)) [0]);
  }

}
