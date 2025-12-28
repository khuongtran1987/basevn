import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { WeWorkPage } from './components/we-work-page/we-work-page';
import { BaseWork } from './components/base-work/base-work';
import { SignPage } from './components/sign-page/sign-page';
import { InfoPage } from './components/info-page/info-page';
import { HrmPage } from './components/hrm-page/hrm-page';
import { CrmPage } from './components/crm-page/crm-page';
import { FinancePage } from './components/finance-page/finance-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Home Page',
  },
  {
    path: 'base-work',
    component: BaseWork,
    title: 'Basework',
  },
  {
    path: 'we-work',
    component: WeWorkPage,
    title: 'Wework',
  },
  {
    path: 'sign',
    component: SignPage,
    title: 'Sign',
  },
  {
    path: 'info',
    component: InfoPage,
    title: 'Info',
  },
  {
    path: 'hrm',
    component: HrmPage,
    title: 'HRM',
  },
  {
    path: 'crm',
    component: CrmPage,
    title: 'CRM',
  },
  {
    path: 'finance',
    component: FinancePage,
    title: 'Finance',
  },
];
