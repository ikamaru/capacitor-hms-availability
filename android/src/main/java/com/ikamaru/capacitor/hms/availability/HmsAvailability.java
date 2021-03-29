package com.ikamaru.capacitor.hms.availability;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.google.android.gms.common.GoogleApiAvailability;
import com.huawei.hms.api.HuaweiApiAvailability;

@NativePlugin
public class HmsAvailability extends Plugin {

    private static final String TAG = "HmsAvailabilityLog";

    @PluginMethod
    public void isHmsAvailable(PluginCall call) {
        boolean isAvailable=false;
        int available = HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(getContext());
        if(available == com.huawei.hms.api.ConnectionResult.SUCCESS) {
            //everything is fine and the user can make map requests
            Log.d(TAG, "isServicesOK: HMS exists");
            isAvailable=true;
        } else {
            Log.d(TAG, "isServicesOK: HMS doesn't exist");//kept the log to check if the method is even called or not
        }
        JSObject ret = new JSObject();
        ret.put("isAvailable", isAvailable);
        call.success(ret);
    }

    @PluginMethod
    public void isGmsAvailable(PluginCall call) {
        boolean isAvailable=false;
        int available = GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(getContext());
        if(available == com.google.android.gms.common.ConnectionResult.SUCCESS) {
            //everything is fine and the user can make map requests
            Log.d(TAG, "isServicesOK: GMS exists");
            isAvailable=true;
        } else {
            Log.d(TAG, "isServicesOK: GMS doesn't exist");//kept the log to check if the method is even called or not
        }
        JSObject ret = new JSObject();
        ret.put("isAvailable", isAvailable);
        call.success(ret);
    }
}
