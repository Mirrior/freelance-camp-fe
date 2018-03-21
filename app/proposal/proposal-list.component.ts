import { Component } from '@angular/core';
import { Proposal } from './proposal';


@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal( 15, 'ABC company', 'http://portfolio.rustinplayer.com','Ruby on Rails', 150, 120, 15, 'player001.dev@gmail.com' )
  proposalTwo: Proposal = new Proposal( 99, 'XYZ company', 'http://portfolio.rustinplayer.com','Ruby on Rails', 150, 120, 15, 'player001.dev@gmail.com' )
  proposalThree: Proposal = new Proposal( 300, 'Something company', 'http://portfolio.rustinplayer.com','Ruby on Rails', 150, 120, 15, 'player001.dev@gmail.com' )

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}