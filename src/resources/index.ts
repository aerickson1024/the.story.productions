import {FrameworkConfiguration, PLATFORM} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/navigation/navigation')
  ]);
}
