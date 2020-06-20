import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // tslint:disable-next-line:prefer-const
  let component: VoteComponent;
  //set up
  beforeEach(() => {
    component = new VoteComponent();
  });
  //tear down
  afterEach(() => {
  });
  it('should increment by 1 when upvote', () => {
    // arrange
  //  const component = new VoteComponent();
    // act
    component.upVote();
    // assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement by 1 when downvote', () => {
//    const component = new VoteComponent();
    // act
    component.downVote();
    // assert
    expect(component.totalVotes).toBe(-1);
  });
});
