/**
 * Centralized logging utility for the application
 * Logs are only shown in development mode to keep production builds clean
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

interface LoggerConfig {
  minLevel: LogLevel;
  enableInProduction: boolean;
}

class Logger {
  private config: LoggerConfig = {
    minLevel: LogLevel.DEBUG,
    enableInProduction: false,
  };

  /**
   * Configure the logger
   */
  configure(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Check if logging should be enabled for the given level
   */
  private shouldLog(level: LogLevel): boolean {
    if (__DEV__) {
      return level >= this.config.minLevel;
    }
    // In production, only log errors if enabled
    return this.config.enableInProduction && level >= LogLevel.ERROR;
  }

  /**
   * Debug level logging - for detailed debugging information
   */
  debug(...args: unknown[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log('[DEBUG]', ...args);
    }
  }

  /**
   * Info level logging - for informational messages
   */
  info(...args: unknown[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.log('[INFO]', ...args);
    }
  }

  /**
   * Warning level logging - for warnings that don't break functionality
   */
  warn(...args: unknown[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn('[WARN]', ...args);
    }
  }

  /**
   * Error level logging - for errors that need attention
   */
  error(...args: unknown[]): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error('[ERROR]', ...args);
    }
  }

  /**
   * Log with custom level
   */
  log(level: LogLevel, ...args: unknown[]): void {
    switch (level) {
      case LogLevel.DEBUG:
        this.debug(...args);
        break;
      case LogLevel.INFO:
        this.info(...args);
        break;
      case LogLevel.WARN:
        this.warn(...args);
        break;
      case LogLevel.ERROR:
        this.error(...args);
        break;
    }
  }
}

// Export a singleton instance
export const logger = new Logger();

// Convenience exports for common use cases
export const logDebug = logger.debug.bind(logger);
export const logInfo = logger.info.bind(logger);
export const logWarn = logger.warn.bind(logger);
export const logError = logger.error.bind(logger);

