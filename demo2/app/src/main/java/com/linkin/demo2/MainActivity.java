package com.linkin.demo2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

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

    private void fun(int x,int y){
        android.util.Log.d("test",String.valueOf(x+y));
    }
    private String fun(String x){return x.toLowerCase();}

}