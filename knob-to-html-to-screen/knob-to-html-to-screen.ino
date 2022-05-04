#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
#include <ESP8266WiFi.h>
#ifndef STASSID
#define STASSID "Galaxy A51564F"
#define STAPSK  "kalq8869"
#endif

const char* ssid     = STASSID;
const char* password = STAPSK;


int percent = 0;
int prevPercent = 0;

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin( 9600 );
  Serial.println("helooooastaaaarttt");
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);


  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  
  u8g2.begin();
}

void loop(void) {

  percent = round(analogRead(0) / 1024.00 * 100);
  
  if(percent != prevPercent) {
    
    Serial.println(percent);
    
    prevPercent = percent;
    
  }

  if(Serial.available()){

    String incomingString = Serial.readString(); 
    char Buf[50];
    incomingString.toCharArray(Buf, 12);
    u8g2.firstPage();
      do {
        u8g2.setFont(u8g2_font_ncenB14_tr);
        u8g2.drawStr(0,12, Buf);
      } while ( u8g2.nextPage() );
    u8g2.drawStr(0,12, Buf);
  }
}
 
