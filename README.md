# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-13-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (230)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_oplus]** power: Notify charger HAL about screen state *(ID: [507779](https://review.lineageos.org/c/507779))*
- **[LineageOS/android_hardware_oplus]** power: Leave DOUBLE_TAP_TO_WAKE to qtipower if it has a node *(ID: [507780](https://review.lineageos.org/c/507780))*
- **[LineageOS/android_hardware_qcom_display]** composer: Report each pluggable display config as its own group *(ID: [507697](https://review.lineageos.org/c/507697))*
- **[LineageOS/android_hardware_samsung]** aidl: sensors: Allow hiding the device orientation sensor *(ID: [507778](https://review.lineageos.org/c/507778))*
- **[LineageOS/android_hardware_samsung]** aidl: sensors: Allow flipping device orientation while folded *(ID: [507777](https://review.lineageos.org/c/507777))*
- **[LineageOS/android_hardware_samsung]** SamsungEsimSwitcher: Add app for tsds2 hybrid eUICC *(ID: [507776](https://review.lineageos.org/c/507776))*
- **[LineageOS/android_hardware_oplus]** extract-utils-ext: Skip early CPU-only thermal stages *(ID: [507775](https://review.lineageos.org/c/507775))*
- **[LineageOS/android_hardware_oplus]** Pen: Show battery popup when the pen is attached *(ID: [507155](https://review.lineageos.org/c/507155))*
- **[LineageOS/android_hardware_nothing]** nothing: Import OplusDoze from commit 1278cdd5cbdf8eb5f892d50f5286720277a2decd *(ID: [507687](https://review.lineageos.org/c/507687))*
- **[LineageOS/android_hardware_nothing]** eSimSwitcher: Switch to QTI ExtTelephony for SIM2 eSIM toggling *(ID: [507069](https://review.lineageos.org/c/507069))*
- **[LineageOS/android_hardware_nothing]** Doze: Invert pickup_sensor_value default value *(ID: [507689](https://review.lineageos.org/c/507689))*
- **[LineageOS/android_hardware_nothing]** nt-fwk: Update feature parsing from NOS 5.0 *(ID: [507096](https://review.lineageos.org/c/507096))*
- **[LineageOS/android_hardware_nothing]** Doze: Enter pocket mode for touchscreen as well *(ID: [507079](https://review.lineageos.org/c/507079))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Fix MaxPower value for USB 3.0 devices *(ID: [506328](https://review.lineageos.org/c/506328))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Sync setup with Pixels *(ID: [506327](https://review.lineageos.org/c/506327))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Drop mtk_rndis.gs4 references *(ID: [506326](https://review.lineageos.org/c/506326))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Bump AIDL USB gadget HAL to V2 *(ID: [507730](https://review.lineageos.org/c/507730))*
- **[LineageOS/android_hardware_google_pixel]** usb: Bump libpixelusb-aidl to AIDL USB gadget V2 *(ID: [507735](https://review.lineageos.org/c/507735))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Make use of sys.usb.controller for notifying musb-hdcr kernel init *(ID: [507733](https://review.lineageos.org/c/507733))*
- **[LineageOS/android_hardware_mediatek]** aidl: health: Bump AIDL HAL VINTF fragment to v5 *(ID: [507729](https://review.lineageos.org/c/507729))*
- **[LineageOS/android_hardware_mediatek]** aidl: usb: Don't override default sys.usb.controller on post-fs-data *(ID: [507734](https://review.lineageos.org/c/507734))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Require AOA daemon *(ID: [507731](https://review.lineageos.org/c/507731))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Setup USB AOA perms and prop *(ID: [507732](https://review.lineageos.org/c/507732))*
- **[LineageOS/android_hardware_qcom_display]** gralloc: Honor 10-bit usage for video encoder buffers *(ID: [507728](https://review.lineageos.org/c/507728))*
- **[LineageOS/android_hardware_qcom_display]** gralloc: Honor 10-bit usage for camera output buffers *(ID: [507727](https://review.lineageos.org/c/507727))*
- **[LineageOS/android_kernel_qcom_sm8250]** arm64: dts: qcom-sdm845: Import from LA.UM.10.3.c25-00400-sdm845.0 *(ID: [506662](https://review.lineageos.org/c/506662))*
- **[LineageOS/android_device_samsung_exynos9820-common]** exynos9820-common: fix eID (extended APDU) NFC regression on 23.2 *(ID: [506968](https://review.lineageos.org/c/506968))*
- **[LineageOS/android_hardware_qcom_audio-ar]** hal/lvacfs: correctly pass input format *(ID: [507596](https://review.lineageos.org/c/507596))*
- **[LineageOS/android_hardware_nothing]** eSimSwitcher: Rebrand to NothingEsimSwitcher *(ID: [507680](https://review.lineageos.org/c/507680))*
- **[LineageOS/android_packages_apps_Launcher3]** fixup! Launcher3: Ability to toggle themed icons for all apps *(ID: [507582](https://review.lineageos.org/c/507582))*

</details>

## 📱 Línea Motorola Activa (15)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Drop qspmhal *(ID: [505247](https://review.lineageos.org/c/505247))*
- **[LineageOS/android_device_motorola_smith]** smith: replace config_skinnyNotifsInLandscape with config_fullWidthNotificationsInLandscape *(ID: [507355](https://review.lineageos.org/c/507355))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: fastbootd is now enabled by default *(ID: [502211](https://review.lineageos.org/c/502211))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Use legacy libion implementation *(ID: [502210](https://review.lineageos.org/c/502210))*
- **[LineageOS/android_hardware_motorola]** motorola: touch: Import single tap support *(ID: [494128](https://review.lineageos.org/c/494128))*
- **[LineageOS/android_hardware_motorola]** motorola: vibrator: effect: import richtap effects *(ID: [494132](https://review.lineageos.org/c/494132))*
- **[LineageOS/android_hardware_motorola]** motorola: vibrator: effect: fix -Wreorder-init-list *(ID: [494131](https://review.lineageos.org/c/494131))*
- **[LineageOS/android_hardware_motorola]** motorola: vibrator: effect: use header library *(ID: [494130](https://review.lineageos.org/c/494130))*
- **[LineageOS/android_hardware_motorola]** motorola: Import qti vibrator effect and rename *(ID: [494129](https://review.lineageos.org/c/494129))*
- **[LineageOS/android_hardware_motorola]** motorola: vibrator: remove example primitives by qcom *(ID: [507560](https://review.lineageos.org/c/507560))*
- **[LineageOS/android_device_motorola_avatrn]** avatrn: Add notification LED support *(ID: [501834](https://review.lineageos.org/c/501834))*
- **[LineageOS/android_device_motorola_smith]** smith: Allow setting independent dpi settings for each display *(ID: [507356](https://review.lineageos.org/c/507356))*
- **[LineageOS/android_hardware_motorola]** Motorola: sensors: add ALS filter sub-HAL to ignore notification LED bleed *(ID: [506320](https://review.lineageos.org/c/506320))*
- **[LineageOS/android_device_motorola_sm7325-common]** sm7325-common: Build and use sensors.moto_als *(ID: [506321](https://review.lineageos.org/c/506321))*
- **[LineageOS/android_device_motorola_rtwo]** rtwo: Frameworks: Tune low-lux auto-brightness curve and debounce *(ID: [506065](https://review.lineageos.org/c/506065))*

</details>

---
*Generado automáticamente por Ra Pulse*
