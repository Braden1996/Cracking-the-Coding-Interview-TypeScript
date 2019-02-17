import Graph from '@utils/Graph';

abstract class PackageBuilder<T> extends Graph<T> {
  abstract getBuildOrder(): T[];
}

export default PackageBuilder;
