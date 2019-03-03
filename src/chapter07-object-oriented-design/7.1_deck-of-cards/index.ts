enum Suit {
  Spades,
  Clubs,
  Diamonds,
  Hearts,
}
enum Rank {
  Ace = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

class Card {
  constructor(readonly suit: Suit, readonly rank: Rank) {}
}

class Deck {
  constructor(private cards: Card[] = []) {
    for (const suit of (Object.keys(Suit) as unknown) as Suit[]) {
      for (const rank of (Object.keys(Rank) as unknown) as Rank[]) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    this.cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
  }
  deal = () => this.cards.pop();
}

class Hand {
  private cards: Card[] = [];
  receiveCard(dealtCard: Card) {
    this.cards.push(dealtCard);
  }
}

type PlayerId = string;
class BlackjackTable {
  private dealer = {
    deck: new Deck(),
    hand: new Hand(),
  };
  private players: { [plyId: string]: Hand } = {};

  addPlayer(player: PlayerId) {
    this.players[player] = new Hand();
  }
  playGame() {
    if (Object.keys(this.players.length).length === 0) {
      throw new Error('Blackjack needs players');
    }

    this.dealer.deck.shuffle();
    for (let i = 0; i < 2; i++) {
      Object.values(this.players).forEach(player => {
        player.receiveCard(this.dealer.deck.deal()!);
      });
      this.dealer.hand.receiveCard(this.dealer.deck.deal()!);
    }
  }
}
