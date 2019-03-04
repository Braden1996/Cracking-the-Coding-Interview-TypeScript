// tslint:disable no-console

interface ICall {
  subject: string;
}

abstract class Employee {
  static seniors: Employee[];

  constructor(readonly name: string, private isFreeInternal: boolean = true) {}

  receiveCall(call: ICall) {
    this.isFreeInternal = false;
    if (this.canHandleCall(call)) {
      this.handleCall(call);
    } else {
      this.escalateCall(call);
    }
    this.isFreeInternal = true;
  }

  isFree = () => this.isFreeInternal;

  protected escalateCall(call: ICall) {
    const senior = this.getSeniors().find(s => s.isFreeInternal);
    if (senior) {
      senior.receiveCall(call);
    } else {
      console.log('Cannot find senior employee to handle call.');
    }
  }

  protected abstract getSeniors(): Employee[];
  protected abstract canHandleCall(call: ICall): boolean;
  protected abstract handleCall(call: ICall): void;
}

class Respondent extends Employee {
  static seniors: Manager[];

  protected getSeniors = () => Respondent.seniors;
  protected canHandleCall = () => Math.random() > 0.5;
  protected handleCall = () => console.log('Respondent is handling call.');
}

class Manager extends Employee {
  static seniors: Director[];

  protected getSeniors = () => Manager.seniors;
  protected canHandleCall = () => Math.random() > 0.25;
  protected handleCall = () => console.log('Manager is handling call.');
}

class Director extends Employee {
  protected getSeniors = () => [];
  protected canHandleCall = () => true;
  protected handleCall = () => console.log('Director is handling call.');
}

class CallCenter {
  constructor(
    private respondents: Respondent[],
    private managers: Manager[],
    private directors: Director[],
  ) {
    Respondent.seniors = this.managers;
    Manager.seniors = this.directors;
  }

  dispatchCall(call: ICall) {
    const respondent = this.respondents.find(s => s.isFree());
    if (respondent) {
      respondent.receiveCall(call);
    } else {
      console.log('Cannot find respondent to handle call.');
    }
  }
}
