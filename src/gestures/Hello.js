import { Finger, FingerCurl, FingerDirection } from './FingerDescription';
import GestureDescription from './GestureDescription';


// describe rock gesture ✌️
const helloDescription = new GestureDescription('hello');


// thumb:
helloDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
helloDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
helloDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
helloDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
helloDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
helloDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
helloDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
helloDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle:
helloDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
helloDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
helloDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
helloDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// ring:
helloDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
helloDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
helloDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
helloDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

// pinky:
helloDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
helloDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
helloDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
helloDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default helloDescription;