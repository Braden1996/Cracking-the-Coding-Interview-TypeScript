import PackageBuilder from './Base';

export class RecursivePackageBuilder<T> extends PackageBuilder<T> {
  getBuildOrder() {
    const buildOrder: T[] = [];
    const independentNodes = this.findNodes().filter(
      n => this.getOutgoing(n).length === 0,
    );

    const buildDependency = (data: T) => {
      buildOrder.push(data);
      const canNowBuild = this.getIncoming(data).filter(d =>
        this.getOutgoing(d).every(d2 => buildOrder.includes(d2)),
      );
      canNowBuild.forEach(d => buildDependency(d));
    };

    independentNodes.forEach(d => buildDependency(d));

    if (buildOrder.length !== this.findNodes().length) {
      throw new Error('Cannot construct build order');
    }

    return buildOrder;
  }
}
