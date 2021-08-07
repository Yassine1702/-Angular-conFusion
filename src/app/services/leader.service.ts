import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leaders';
import { Leader } from '../shared/leader';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[]{
    return Leaders;
  }
  
  getLeader(id:String): Leader{
      return Leaders.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLeader():Leader {
    return Leaders.filter((leader) => (leader.featured)) [0];
  }

}
