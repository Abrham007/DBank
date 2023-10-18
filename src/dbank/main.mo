import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Time "mo:base/Time";

actor DBank {
  var now = Time.now();
  Debug.print(debug_show(now));
  stable var currentValue = 300;
  // currentValue := 100;
 

  let id = 452654645622;
  // Debug.print(debug_show(id));

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func wihtDraw(amount: Nat) {
    let tempValue: Int = currentValue - amount;
    if (tempValue >= 0){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
    }else {
      Debug.print("error no more money");
    }
  };

  public query func checkBalance(): async Int {
    return currentValue;
  }

  // topUp();
}