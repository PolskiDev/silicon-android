package com.gabrielmargarido.silicon;

// Importing because line 28 - Bitmap Favicon
import android.Manifest;
import android.app.DownloadManager;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;

import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;

import android.os.Bundle;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.PermissionRequest;
import android.webkit.URLUtil;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.DownloadListener;
import android.widget.Toast;

/*
    Define Line 23 - Set your local website URL
    String ApplicationUrl;
*/
public class MainActivity extends AppCompatActivity {
    private int STORAGE_PERMISSION_CODE = 1;

    //# Define Application Android WebView
    private WebView mywebView;

         // Enable external sources download capability
         public void onDownloadStart(String url, String userAgent,
                                     String contentDisposition, String mimeType,
                                     long contentLength) {
             DownloadManager.Request request = new DownloadManager.Request(
                     Uri.parse(url));
             request.setMimeType(mimeType);
             String cookies = CookieManager.getInstance().getCookie(url);
             request.addRequestHeader("cookie", cookies);
             request.addRequestHeader("User-Agent", userAgent);
             request.setDescription("Downloading file...");
             request.setTitle(URLUtil.guessFileName(url, contentDisposition,
                     mimeType));
             request.allowScanningByMediaScanner();
             request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
             request.setDestinationInExternalPublicDir(
                     Environment.DIRECTORY_DOWNLOADS, URLUtil.guessFileName(
                             url, contentDisposition, mimeType));
             DownloadManager dm = (DownloadManager) getSystemService(DOWNLOAD_SERVICE);
             dm.enqueue(request);
             Toast.makeText(getApplicationContext(), "Downloading File",
                     Toast.LENGTH_LONG).show();
         }

    //# Define HTML++ Application Bytecode
    String ApplicationUrl = "http://gabrielmargarido.org/opt/silicon";


    // Function to check and request permission
    public void requestAndroidPermission(String permission, int requestCode)
    {
        // Checking if permission is not granted
        if (ContextCompat.checkSelfPermission(MainActivity.this, permission) == PackageManager.PERMISSION_DENIED) {
            ActivityCompat.requestPermissions(MainActivity.this, new String[] { permission }, requestCode);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /* These instructions hide the application title bar */
        //requestWindowFeature(getWindow().FEATURE_NO_TITLE);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        getSupportActionBar().hide(); // This is gonna hide the title bar


        mywebView=(WebView) findViewById(R.id.webview);
        mywebView.setWebViewClient(new WebViewClient());

        //Load to memory HTML++ Application Bytecode
        mywebView.loadUrl(ApplicationUrl);

        /*  Source code lines 49 and 50:

            Enables Javascript programming language to run
            on the WebView (also TypeScript and CoffeeScript
            languages)...

            HTML++ Programming Language Running Schematic {
                Source code -> Transpiler -> HTML++ Bytecode
                -> Candy Assembler -> Android Studio
                -> Android Bytecode -> ART (Android Runtime);
            }

         */
        WebSettings webSettings=mywebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);

        mywebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    request.grant(request.getResources());
                }
            }

        });

        /* Ask for STORAGE_WRITE and STORAGE_READ android permissions*/
        requestAndroidPermission(Manifest.permission.READ_EXTERNAL_STORAGE, 1);
        requestAndroidPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE, 1);
        requestAndroidPermission(Manifest.permission.CAMERA, 1);
        requestAndroidPermission(Manifest.permission.RECORD_AUDIO, 1);
        requestAndroidPermission(Manifest.permission.ACCESS_FINE_LOCATION, 1);

        /* Allow downloads from external sources */
        mywebView.setDownloadListener(new DownloadListener() {
            public void onDownloadStart(String url, String userAgent,
                                        String contentDisposition, String mimetype,
                                        long contentLength) {
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });


    }

    public class mywebClient extends WebViewClient{
        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon){
            super.onPageStarted(view,url,favicon);
        }
        @Override
        public boolean shouldOverrideUrlLoading(WebView view,String url){
            view.loadUrl(url);
            return true;
        }
    }
    @Override
    public void onBackPressed(){
        if(mywebView.canGoBack()) {
            mywebView.goBack();
        }
        else{
            super.onBackPressed();
        }
    }
}