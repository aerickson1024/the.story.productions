import {EventAggregator} from 'aurelia-event-aggregator';
import {inject, PLATFORM} from 'aurelia-framework';

@inject(EventAggregator)
export class App {
  ea: EventAggregator;
  router: any;
  
  constructor(eventAggregator) {
    this.ea = eventAggregator;
  }

  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ['', 'home'],
      moduleId: PLATFORM.moduleName('modules/home/home'),
      name: 'home',
      title: 'Home',
      nav: true
    }, {
      route: 'films',
      moduleId: PLATFORM.moduleName('modules/films/films'),
      name: 'films',
      title: 'Films',
      nav: true
    }, {
      route: 'partners',
      moduleId: PLATFORM.moduleName('modules/partners/partners'),
      name: 'partners',
      title: 'Partners',
      nav: true
    }, {
      route: 'about',
      moduleId: PLATFORM.moduleName('modules/about/about'),
      name: 'about',
      title: 'About',
      nav: true
    }, {
      route: 'production',
      moduleId: PLATFORM.moduleName('modules/production/production'),
      name: 'production',
      title: 'Production',
      nav: true
    }, {
      route: 'contact',
      moduleId: PLATFORM.moduleName('modules/contact/contact'),
      name: 'contact',
      title: 'Contact',
      nav: true
    }]);
  }
}
