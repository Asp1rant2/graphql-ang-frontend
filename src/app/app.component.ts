import {Component, Inject, InjectionToken} from '@angular/core';
import {
  BETTER_LOGGER_TOKEN,
  BetterLoggerService,
  FactoryLoggerService,
  LoggerService,
  silentLogger
} from "./LoggerService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [{provide: BetterLoggerService}],
})
export class AppComponent {
  title = 'graphql-ang-demo';

  constructor(
    // @Inject(BETTER_LOGGER_TOKEN) private _logger: BetterLoggerService
    private _logger: BetterLoggerService,
  ) {
    console.log(this._logger.timezone);
    this._logger.logMessage(this._logger.timezone);
    this._logger.logMessage('welcome');
  }
}
