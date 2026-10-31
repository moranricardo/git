# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-31-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (170)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_xiaomi]** xiaomi: Implement a BLE remote scanner for recovery mode *(ID: [510484](https://review.lineageos.org/c/510484))*
- **[LineageOS/android_hardware_qcom_audio-ar]** core: Drop A2DP device ports without offload *(ID: [511272](https://review.lineageos.org/c/511272))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** power: supply: qti_battery_charger: preserve M81 property ABI *(ID: [509881](https://review.lineageos.org/c/509881))*
- **[LineageOS/android_packages_apps_Settings]** Settings: Fix reboot flow for BT dev settings *(ID: [511271](https://review.lineageos.org/c/511271))*
- **[LineageOS/android_kernel_motorola_sm7325]** arm64: dts: qcom: berlna,xpeng: fix double tap to wake on upstream touch drivers *(ID: [510998](https://review.lineageos.org/c/510998))*
- **[LineageOS/android_hardware_mediatek]** wlan: wpa_supplicant_8_lib: Drop BCMDHD_64_BIT_IPC *(ID: [509285](https://review.lineageos.org/c/509285))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Sync setup with Pixels *(ID: [506327](https://review.lineageos.org/c/506327))*
- **[LineageOS/android_hardware_mediatek]** overlay: MssiFrameworkTelephonyOverlay: Remove IWlan data and network service classes *(ID: [510815](https://review.lineageos.org/c/510815))*
- **[LineageOS/android_hardware_mediatek]** wlan: Import MediaTek wpa_supplicant config *(ID: [509287](https://review.lineageos.org/c/509287))*
- **[LineageOS/android_hardware_mediatek]** wlan: wpa_supplicant_8_lib: Convert to blueprint *(ID: [509284](https://review.lineageos.org/c/509284))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Setup USB AOA perms and prop *(ID: [507732](https://review.lineageos.org/c/507732))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Bump AIDL USB gadget HAL to V2 *(ID: [507730](https://review.lineageos.org/c/507730))*
- **[LineageOS/android_hardware_mediatek]** wlan: wpa_supplicant_8_lib: Run clang-format *(ID: [509283](https://review.lineageos.org/c/509283))*
- **[LineageOS/android_hardware_mediatek]** wlan: Import MediaTek wpa_supplicant_8_lib from khadas *(ID: [509282](https://review.lineageos.org/c/509282))*
- **[LineageOS/android_hardware_mediatek]** aidl: usb: Don't override default sys.usb.controller on post-fs-data *(ID: [507734](https://review.lineageos.org/c/507734))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Require AOA daemon *(ID: [507731](https://review.lineageos.org/c/507731))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Drop mtk_rndis.gs4 references *(ID: [506326](https://review.lineageos.org/c/506326))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Make use of sys.usb.controller for notifying musb-hdcr kernel init *(ID: [507733](https://review.lineageos.org/c/507733))*
- **[LineageOS/android_hardware_mediatek]** aidl: gadget: Fix MaxPower value for USB 3.0 devices *(ID: [506328](https://review.lineageos.org/c/506328))*
- **[LineageOS/android_kernel_radxa_radxa02-build]** radxa02: Setup bazel kernel build *(ID: [511153](https://review.lineageos.org/c/511153))*
- **[LineageOS/android_kernel_qcom_sm8450]** usb: dwc: dwc3-msm-ops: Update the RT priority if uvc is in composition *(ID: [511237](https://review.lineageos.org/c/511237))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: usb: gadget: uvc: Remove nested locking *(ID: [397274](https://review.lineageos.org/c/397274))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: usb: gadget: uvc: Fix use are free during STREAMOFF *(ID: [397273](https://review.lineageos.org/c/397273))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: usb:gadget:uvc Do not use worker thread to pump isoc usb requests *(ID: [397272](https://review.lineageos.org/c/397272))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: usb: gadget: uvc: Fix use-after-free for inflight usb_requests *(ID: [397271](https://review.lineageos.org/c/397271))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: usb: gadget: uvc: move video disable logic to its own function *(ID: [397270](https://review.lineageos.org/c/397270))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: usb: gadget: uvc: Allocate uvc_requests one at a time *(ID: [397269](https://review.lineageos.org/c/397269))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: usb: gadget: uvc: prevent use of disabled endpoint *(ID: [397268](https://review.lineageos.org/c/397268))*
- **[LineageOS/android_kernel_qcom_sm8450]** BACKPORT: usb: gadget: uvc: Add missing initialization of ssp config descriptor *(ID: [397267](https://review.lineageos.org/c/397267))*
- **[LineageOS/android_kernel_qcom_sm8450]** BACKPORT: usb: gadget: unconditionally allocate hs/ss descriptor in bind operation *(ID: [397266](https://review.lineageos.org/c/397266))*

</details>

## 📱 Línea Motorola Activa (93)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_berlin]** Revert "berlin: Include Bluetooth Audio HAL for hearing aid" *(ID: [511263](https://review.lineageos.org/c/511263))*
- **[LineageOS/android_device_motorola_berlna]** Revert "berlna: Include Bluetooth Audio HAL for hearing aid" *(ID: [511264](https://review.lineageos.org/c/511264))*
- **[LineageOS/android_device_motorola_dubai]** Revert "dubai: Include Bluetooth Audio HAL for hearing aid" *(ID: [511265](https://review.lineageos.org/c/511265))*
- **[LineageOS/android_device_motorola_xpeng]** Revert "xpeng: Include Bluetooth Audio HAL for hearing aid" *(ID: [511266](https://review.lineageos.org/c/511266))*
- **[LineageOS/android_device_motorola_tundra]** Revert "tundra: Include Bluetooth Audio HAL for hearing aid" *(ID: [511267](https://review.lineageos.org/c/511267))*
- **[LineageOS/android_device_motorola_sm7325-common]** Revert "sm7325-common: Import Hearing AID configuration xml" *(ID: [511268](https://review.lineageos.org/c/511268))*
- **[LineageOS/android_kernel_motorola_sm7325]** arm64: dts: qcom: berlna,xpeng: fix double tap to wake on upstream touch drivers *(ID: [510998](https://review.lineageos.org/c/510998))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Fix ultrawide front camera preview colors *(ID: [511122](https://review.lineageos.org/c/511122))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Drop MotCamera2 *(ID: [511025](https://review.lineageos.org/c/511025))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Increase kernel log buffer to 1MiB *(ID: [510962](https://review.lineageos.org/c/510962))*
- **[LineageOS/android_device_motorola_nairo]** nairo: overlay-lineage: Reconfigure aux cameras for Aperture *(ID: [510947](https://review.lineageos.org/c/510947))*
- **[LineageOS/android_device_motorola_smith]** smith: Properly patch camera postproc impl *(ID: [511228](https://review.lineageos.org/c/511228))*
- **[LineageOS/android_device_motorola_smith]** smith: Commonize audio HAL build target *(ID: [511038](https://review.lineageos.org/c/511038))*
- **[LineageOS/android_device_motorola_smith]** smith: Switch to qcom audio effects *(ID: [511037](https://review.lineageos.org/c/511037))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Use linear preview buffers for camera *(ID: [510946](https://review.lineageos.org/c/510946))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Add proprietary-firmware.txt *(ID: [510738](https://review.lineageos.org/c/510738))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Disable fluence in calls *(ID: [428928](https://review.lineageos.org/c/428928))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Build audio & soundtrigger HALs from source *(ID: [428927](https://review.lineageos.org/c/428927))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Switch to qcom audio effects *(ID: [428926](https://review.lineageos.org/c/428926))*
- **[LineageOS/android_device_motorola_nairo]** nairo: audio_amplifier: Use hw_module_t->dso instead of RTLD_NEXT *(ID: [428925](https://review.lineageos.org/c/428925))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Convert audio_amplifier to blueprint *(ID: [428924](https://review.lineageos.org/c/428924))*
- **[LineageOS/android_device_motorola_nairo]** nairo: audio_amplifier: Make all the functions static *(ID: [428923](https://review.lineageos.org/c/428923))*
- **[LineageOS/android_device_motorola_nairo]** nairo: audio_amplifier: Fix PCM device check *(ID: [428922](https://review.lineageos.org/c/428922))*
- **[LineageOS/android_device_motorola_nairo]** nairo: amplifier: Add amplifier usecase to head of usecase list *(ID: [428921](https://review.lineageos.org/c/428921))*
- **[LineageOS/android_device_motorola_nairo]** nairo: amplifier: Clean up makefile *(ID: [428920](https://review.lineageos.org/c/428920))*
- **[LineageOS/android_device_motorola_nairo]** nairo: amplifier: Rebrand to AW882xx *(ID: [428919](https://review.lineageos.org/c/428919))*
- **[LineageOS/android_device_motorola_nairo]** nairo: amplifier: Fix device list initializations *(ID: [428918](https://review.lineageos.org/c/428918))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Add custom audio amplifier for TFA amp feedback *(ID: [428917](https://review.lineageos.org/c/428917))*
- **[LineageOS/android_device_motorola_racer]** racer: Drop MotCamera2 *(ID: [511028](https://review.lineageos.org/c/511028))*
- **[LineageOS/android_device_motorola_racer]** racer: Commonize audio HAL build target *(ID: [511023](https://review.lineageos.org/c/511023))*

</details>

---
*Generado automáticamente por Ra Pulse*
