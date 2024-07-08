import {ComponentFixture} from '@angular/core/testing';
import {MockBuilder, MockRender} from 'ng-mocks';
import {AppComponent} from './app.component';
import {RouterOutlet} from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await MockBuilder(AppComponent).keep(RouterOutlet);
  });

  beforeEach(() => {
    fixture = MockRender(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular18'`, () => {
    expect(component.title).toEqual('angular18');
  });
});
