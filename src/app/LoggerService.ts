import {Injectable, InjectionToken,} from "@angular/core";

@Injectable()
export class LoggerService {
  constructor() {
  }

  timezone: string = '?'

  logMessage(msg: string): void {
    console.log(`[LOG] ${msg}`);
  }
}

@Injectable()
export class BetterLoggerService extends LoggerService{
  constructor() {
    super();
  }

  override timezone: string = 'ust-8';

  override logMessage(msg: string): void {
    const date = new Date().toLocaleString();
    console.log(`[${date}] [LOG] ${msg}`);
  }
}

export const silentLogger  = {
  timezone: 'ust-8',
  logMessage: (msg: string) => {},
};

export const FactoryLoggerService = (loggerService: LoggerService) => {
  console.log('Use a factory');
  return new BetterLoggerService();
}

export const BETTER_LOGGER_TOKEN = new InjectionToken<BetterLoggerService>('app.betterLogger',
  {
    providedIn: 'root',
    factory: () => {
      console.log('created a logger by InjectionToken')
      return new BetterLoggerService()
    },
  },
);
