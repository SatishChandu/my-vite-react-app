import '@testing-library/jest-dom';
import { vi } from 'vitest';

globalThis.console = {
    ...console,
    log: vi.fn(),
  };
  