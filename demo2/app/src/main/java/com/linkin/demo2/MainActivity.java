package com.linkin.demo2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    private String total = "hello";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        while (true){
            try{
                Thread.sleep(1000);
            }catch (InterruptedException e){
                e.printStackTrace();
            }

            fun(50,30);
            Log.d("test",fun("LoWeRcAsE Me!!!!!!"));
        }
    }

    void fun(int x,int y){
        android.util.Log.d("test",String.valueOf(x+y));
    }
    String fun(String x){return x.toLowerCase();}

    void secret(){
        total += " secretFunc";
        Log.d("test","this is secret func");
    }

    static  void staticSecret(){
        Log.d("test","this is static secret func");
    }

}