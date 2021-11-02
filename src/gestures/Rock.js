import { Finger, FingerCurl, FingerDirection } from './FingerDescription';
import GestureDescription from './GestureDescription';


// describe rock gesture ✌️
const rockDescription = new GestureDescription('rock');


// thumb:
// rockDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// rockDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// rockDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
// rockDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
rockDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rockDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
rockDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
rockDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle:
rockDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
rockDescription.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
rockDescription.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);
rockDescription.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1.0);

// ring:
rockDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rockDescription.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
rockDescription.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);
rockDescription.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1.0);

// pinky:
rockDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
rockDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
rockDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
rockDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default rockDescription;