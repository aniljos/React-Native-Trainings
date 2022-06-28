package com.awesomeapp; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.Promise;
import 	android.content.pm.PackageManager;

public class SampleModule extends ReactContextBaseJavaModule {
    SampleModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
   public String getName(){
        return "SampleModule";
   }

   @ReactMethod
   public void sayHello(String message, Promise p){
        p.resolve("Hello " + message);
   }

   @ReactMethod
   public void checkCameraFlash(Promise p){

    try {
        boolean hasFlash = getCurrentActivity()
                                .getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA_FLASH);
        if(hasFlash == true){
            p.resolve(hasFlash);
        }
        else{
            p.reject(new Exception("Not avialbale"));
        }
        
    } catch (Exception e) {
        
            p.reject(new Exception("Not avialbale"));
    }
        
   }
}