import { describe, it, expect, vi, beforeEach } from 'vitest';
import { copyToClipboard } from './clipboardHelper.ts';

describe('copyToClipboard helper', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('uses navigator.clipboard when available', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    const result = await copyToClipboard('8830192811');
    expect(result).toBe(true);
    expect(writeTextMock).toHaveBeenCalledWith('8830192811');
  });

  it('falls back to document.execCommand when clipboard API fails or is missing', async () => {
    // Delete clipboard
    // @ts-expect-error simulating legacy/missing clipboard
    delete navigator.clipboard;

    const execCommandMock = vi.fn().mockReturnValue(true);
    document.execCommand = execCommandMock;

    const result = await copyToClipboard('1370019283719');
    expect(result).toBe(true);
    expect(execCommandMock).toHaveBeenCalledWith('copy');
  });
});
