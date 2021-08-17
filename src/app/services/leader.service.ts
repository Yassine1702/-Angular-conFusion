import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leaders';
import { Leader } from '../shared/leader';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    /* return Promise.resolve(Leaders); */
    return  new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
        setTimeout(()=> resolve(Leaders), 2000);
  });
  }
  
  getLeader(id:String): Promise<Leader>{
      /* return Promise.resolve(Leaders.filter((leader) => (leader.id === id))[0]); */

      return  new Promise(resolve => {
        // Simulate server latency with 2 seconds delay
          setTimeout(()=> resolve(Leaders.filter((leader) => (leader.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader():Promise<Leader> {
    /* return Promise.resolve( Leaders.filter((leader) => (leader.featured)) [0]); */

    return  new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
        setTimeout(()=> resolve(Leaders.filter((leader) => (leader.featured))[0]), 2000);
  });
  }

}
