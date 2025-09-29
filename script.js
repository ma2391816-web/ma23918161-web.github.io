// TikTok Pixel Code
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

  ttq.load('D3DFRERC77U7D8VS45LG');
  ttq.page();
}(window, document, 'ttq');

// تتبع النقر على رابط الواتساب
document.getElementById('whatsapp-link').addEventListener('click', function() {
    if(typeof ttq !== 'undefined') {
        ttq.track('ClickButton', {
            contents: [{
                content_type: 'whatsapp_link',
                content_id: 'wa_link_hfdyry'
            }],
            value: 1,
            currency: 'USD'
        });
    }
});

// تتبع تحميل الصفحة
window.addEventListener('load', function() {
    if(typeof ttq !== 'undefined') {
        ttq.track('ViewContent', {
            contents: [{
                content_type: 'landing_page',
                content_id: 'whatsapp_landing'
            }],
            value: 0,
            currency: 'USD'
        });
    }
});