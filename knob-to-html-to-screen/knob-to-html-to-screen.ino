#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>


int percent = 0;
int prevPercent = 0;

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin( 9600 );
  u8g2.begin();
}

void loop(void) {

  percent = round(analogRead(0) / 1024.00 * 100);
  
  if(percent != prevPercent) {
    
    Serial.println(percent);
    
    prevPercent = percent;
    
  }
  
  delay(100);
  
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_ncenB14_tr);
    u8g2.drawStr(0,12,"shut me off...");
    u8g2.drawStr(1,12,"one last time...");
  } while ( u8g2.nextPage() );
}
