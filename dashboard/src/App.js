
import './App.css';
import React, { Component } from 'react';
import { Dashboard } from 'powerbi-report-component';

export default class extends Component {
  onEmbedded(embed) {
    console.log(`Report embedded: `, embed, this);
  }

  render() {
   
    return (
      <div>
        
 
 <Dashboard
   tokenType="Embed"
   accessToken="H4sIAAAAAAAEAB1Wxc7FjLF7l3-bSmGq1EWYmbMLM5xwUt13v5-6tzQj22PPf_-xs3dcsvKff_9zh23XoBdhZO6ArWvg9zsemJyG9FMOBkw2MYoQfhkfOkmHHK6hBkEeK-7r3lVGPbdhMcnIe71NoTodJF-My02oENt1PYF4nXVqSi7Fmz-RkL1Xdq_ut95izmDoWMdhbVsnIztB-I50LpfKF3MyTT1WYFMVzuDWZSVUw5kzVJsiIh32vIBmhAKhRz8SfsJbRcrX_tau0yw9dER4kd_uxwdHb5VehSdYbRurr0eKaSGHH2U_S1nc2z1Bi6SBzzLMcgJRXm6VG7AKqSVIfvDHodCq7OlW8VVaqm0mLOTxflZfcqjmmRuCoky7IfBB5DP5lo17ACFYP57OB3QnifEVtwUhQCQAnlwkWvFDw9y9HZCBqWuzDAJQAizCnySUgaWALiI-xRyyM9QK7QBjP-dZWoH3oBBn6BNy8BsKlezb-yHGGf16PieKmA7duq0s0DvuTiOgT0kBB1zb5V5Vs-mWiL63wBmXPovrg2fT7fi-U8rMY_ztGqTuoqsbsldvdyCHrd7_0aQ89AUHwzTZIgJbw2ZZ27uExIIC7-LeDabqFCeGsYEOcaGuDl4YG1iMpbs4rWPRn3rJzFhYoZGBflDnVvqa0-kXp-UQqjADEBq5MJg4ZaMM43vkU91DfxTYLepRQh-XT2jqFAQwHFSlWuEiHYkjGD2xpBQgNeLvnKYwoJffqZwjVbSOzGSM4HNfAV6oSEA8BH9IdV4BOMCaiGAXtTvvrVW2nus-XTppi-IuqmYEHGolCpZXTEdDOd6jYLPhu9SJeWHDPdyCIETK-UH-XDRCQrJUmttfO66t1aEjPx0f3kiPPXuVQrAm9asyNCMcw8cPNGCt31A_33vrTZsDUjo21e4F_giy9hs88mIU4Z3E4gnoXg75XLlMG5k3Niy08XWZEsj6mKWY2wK722zsKWabQFTlrDpe6rfZCADDUvsd7UCibR_XISMFgVWJtKJosFMApjh5tnELnmqw1dVsg3cm9zsHIKQ_5_zisfq6QE5RbZDFd-MDjludATQMLIsynr9_uJxy5XdrXsP-ri0YeSul1ASXDByBFHWRmQTsINq03Yp7icPVZvXEY-NBvHv6UBT-prljXYL7YlARmjaBQkpIvRpM08sB3e1rNjEwpD9TsCgdxFYHdNmdzSmLYssqCGJDOV2NdId-b_RosrgaI9LJ60Dk_OJZG21VCZGcP0-Dblrax0V6QPIqaowNzH93ixWOdpE3XTENFcayv8QU4V1X-LtRj75-tr9Sw5lD5blE4736WtPl1cfBobk8etP0MWA0-EWpoR4RKumShWXaK_5NMR2ny044IIpaZYnbKEiT6ws1wfTs-W3RTsAzmhC2K8UNauF1AiZ6V1Vhr4tPf158S7DpEwLVLz0on-bAJQ6oHRoB-r_Ea3Q3pJuRpwJ7ywYe2C1uqpey7SEeHIU4ABYZNbE8OlkF8VYau-k6MzBxFiy-6aLuq8wRi3-kQuevwIr7QKVAmdwDBGLIiic9cxuXiJjGV_xUqjmNRAgSSllbdD3xT_47xCWI6KLLpaHprqORibcli-EsvwmUo8g47zdnRNWAHEB45KB76hb2u1r-cEcR0SFMubomaj9VfZQT4cXWgZ9LWHGuWeS6qnfGPb4xfkAAVlKmWKfw4xXBB9dPpRHKDpZDRGP6p0NX2kGrvdeETxbKAIupipKrPhrweDGrCGEB92aZj8iB1raBeBjb3ursABF5p7nN82OR48Mmk09rbHtoLZaN7YUHxEkocMRjt0G7O-oDxHbOJ0VVLCT2WOOvhCicUZ9cgNVIm6jFLTVN8g4TB70a9POxlZYfLDRIaZsodV3TSalUqiZlg6CoZPAiO4HSAgBJ0y_9V-qiBsU0d1EhQbTDKK7J1--DZjxVZq-8757Nd8GasfV18keDx8zVR3h873D6QrBE_mXpSlg9DdtvauRgp_c3OL_yabjKBWIRWMTvMefRGxgrWkez0V029_JGMJjeJq98laGADRmAOIV7IdWsje5tVA1tSNavWfQXC8AR_XMzan1ncFy6W7aOYb7OrJzfmUFXI1DwuCpDXt7l6OPUxmMGzmzrbqa23ZzQu38b_LByK24EPWpIrvb5XeQMCEr3g7j2VO1NvdLz38R4BQtyAhrOeKcwP5gXQJuCLBmRdbM4a4wwb2MZBqUgojqPTTSnvrIqIhrVorcpaQA9bXiOF1G29QTRjZ8wh9uNQcAqhmMH9CG_Q4-tMkiA4pzwn3_-9Q-3veuxaNX797pMJFs7IxGBwREVT25MT-dalMzCPN_Br3X30t1BgX_DSI7fiT2m_rvv_DYFyaG0dYGG2RAVCLn4tanifyUFVxusUL2GleGYoCB8LUnYmPiRzXi_t9L-FRW4nqRXcifhGn4cv7HkMhwBoq8h9Fr6Qw8dKgrT70GD0JeNfM6fbGso5R_eikHw5WTF8ZcyXxsC2lLcp_EsqZ8DIVOyTErHXdJqlOLtnLp9aDpfxz2hTV3SKCiFedJ7DrHTHhvNF7XC3LD1i1bPXiz_fpeQSWQItjEM-We9Mj5dtMwG_S0oawyA9L7I5IUbgYb817vC4W4iwd8hcpvsOfhu18CzOiaIsfufQDv_-R_N79pWmxL-sbymDPxJeogWceSvbLiUCHUz_0N5XTNnx7lVf7CmO1hX3tKwYlzePPce5WKKnSZid-3wXIwRaWrXUqNZZqkibMtcMCx_gnWYaPfw1CZiI-zMqRCDRMDXB7K2pb1MWLODeclsvXe6QWm3ROuUjJCJgTfFGZqEEQNx-yXYWiPiQHoYAmJaPNvvlBvHBi6CRDXjnyo8641RwbuoRSy0alGmG0kXPojJ2DwKSKWDfdC0-JqU9Dij5eMa4EgEW8rw7sK2gkmupnOaIfJc0_YfCnVdDV3vt3l-kFOOvNXPkVOhHvKU7WG1XKIYGhYoUA2dlBZyMO5zr89buwenPjvS9hYENcuiPAhVqDw-q4R10XTcxr6IFgfm0Bh3F7BFaYtQ80fz__0_OQCDEq4LAAA="
   embedUrl="https://app.powerbi.com/dashboardEmbed?dashboardId=b5f50796-6e97-4dc5-a755-00cf4405e029&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19"
   embedId="b5f50796-6e97-4dc5-a755-00cf4405e029"
   pageView="fitToWidth" // 'fitToWidth' (default) , 'oneColumn', 'actualSize'
   onLoad={(dashboard) => {
     console.log('Dashboard Loaded!');
     this.dashboard = dashboard; // get the dashboard object from callback and store it.(optional)
   }}
   onTileClicked={(data) => {
     console.log('Data from tile', data);
   }}
 />
      </div>
    );
  }
}

