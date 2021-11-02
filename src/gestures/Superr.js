import { Finger, FingerCurl, FingerDirection } from './FingerDescription';
import GestureDescription from './GestureDescription';


// describe victory gesture ✌️
const superrDescription = new GestureDescription('superr');


// thumb:
superrDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
// superrDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
superrDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
superrDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
superrDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// index:
superrDescription.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
superrDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
superrDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);
superrDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1.0);
superrDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
superrDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
superrDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
superrDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
superrDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
superrDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// ring:
superrDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
superrDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
superrDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
superrDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

// pinky:
superrDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
superrDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
superrDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
superrDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default superrDescription;