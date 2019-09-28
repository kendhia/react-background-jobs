package kendhia.reactlibrary;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class RNReactNativeBackgroundJobsModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "RNBackgroundJobs";
    private static ReactApplicationContext reactContext;

    public RNReactNativeBackgroundJobsModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }


    @Nonnull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void startService() {
        this.reactContext.startService(new Intent(this.reactContext, kendhia.reactlibrary.BackgroundJobsService.class));
    }

    @ReactMethod
    public void stopService() {
        this.reactContext.stopService(new Intent(this.reactContext, kendhia.reactlibrary.BackgroundJobsService.class));
    }
}
