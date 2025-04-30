import WaveSurfer from "../components/BaseComponents/CometChatAudioBubble/src/wavesurfer";
import { CalendarObject } from "./CalendarObject";
interface MediaPlayer {
    video?: HTMLVideoElement | null;
    mediaRecorder?: MediaRecorder | null;
}
/**
 * storing current media which is being played.
 */
export declare const currentMediaPlayer: MediaPlayer;
export declare const currentAudioPlayer: {
    instance: WaveSurfer | null;
    setIsPlaying: ((isPlaying: boolean) => void) | null;
};
/**
 * Function to stop current media playback.
 */
export declare function closeCurrentMediaPlayer(pauseAudio?: boolean): void;
export declare function sanitizeHtml(htmlString: string, whitelistRegExes: RegExp[]): string;
export declare function isMessageSentByMe(message: CometChat.BaseMessage, loggedInUser: CometChat.User): boolean;
/**
 * Function to check if the current browser is safari.
 * @returns boolean
 */
export declare function isSafari(): boolean;
/**
 * Checks if a given text is a URL.
 * A valid URL should start with either "http", "https", or "www" and must not contain spaces.
 *
 * @param {string} text - The text to be checked.
 * @returns {boolean} Returns true if the text is a URL, false otherwise.
 */
export declare function isURL(text: string): boolean;
export declare function getThemeVariable(name: string): string;
export declare function getThemeMode(): "dark" | "light";
/**
 * Function to convert audio forat from webm to wav
 * @param file
 * @returns
 */
export declare function processFileForAudio(file: File): Promise<File>;
/**
 * Converts a Unix timestamp to a formatted date string in DD/MM/YYYY format.
 *
 * @param {number} timestamp - The Unix timestamp (in seconds) to be converted.
 * @returns {string} The formatted date string in DD/MM/YYYY format.
 */
export declare function formatDateFromTimestamp(timestamp: number): string;
export declare function isMobileDevice(): boolean;
export declare function sanitizeCalendarObject(calendarObject?: CalendarObject): {
    [k: string]: any;
};
export declare function fireClickEvent(): void;
export declare const decodeHTML: (input: string) => string;
export {};
