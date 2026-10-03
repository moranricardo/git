# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-03-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (218)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_qcom_audio-ar]** core: Account for 'acnMask' *(ID: [505859](https://review.lineageos.org/c/505859))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** qcom: wlan: qcacld-3.0: Expand Oplus WLAN CONFIG forms for Kbuild *(ID: [506062](https://review.lineageos.org/c/506062))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** oplus: nfc: Update drivers from PLQ110_16.0.1.302(CN01) *(ID: [506061](https://review.lineageos.org/c/506061))*
- **[LineageOS/android_hardware_nxp_nfc]** nxp: Stop client thread spin and queue UAF *(ID: [506080](https://review.lineageos.org/c/506080))*
- **[LineageOS/android_hardware_nxp_nfc]** nxp: Stop client thread spin and queue UAF *(ID: [506079](https://review.lineageos.org/c/506079))*
- **[LineageOS/android_hardware_samsung]** aidl: camera: fix `set_torch_mode_strength` for qualcomm devices *(ID: [506033](https://review.lineageos.org/c/506033))*
- **[LineageOS/android_hardware_nxp_nfc]** snxxx: Keep client thread on its own queue handle during teardown *(ID: [506083](https://review.lineageos.org/c/506083))*
- **[LineageOS/android_kernel_motorola_sm8550]** Merge branch 'lineage-21' of github.com:LineageOS/android_kernel_qcom_sm8550 into HEAD *(ID: [506084](https://review.lineageos.org/c/506084))*
- **[LineageOS/android_hardware_lineage_generic-ims]** ims: Add soong namespace *(ID: [506064](https://review.lineageos.org/c/506064))*
- **[LineageOS/android_hardware_qcom_display]** display: init: Update cape MSM/APQ/4G display properties *(ID: [505863](https://review.lineageos.org/c/505863))*
- **[LineageOS/android_hardware_qcom_display]** display: Make sure panel supports HDR before advertising *(ID: [505862](https://review.lineageos.org/c/505862))*
- **[LineageOS/android_hardware_qcom_audio-ar]** core: Implement createMmapBuffer via getParameters *(ID: [505857](https://review.lineageos.org/c/505857))*
- **[LineageOS/android_hardware_qcom_audio-ar]** core: Fix range-loop-construct error *(ID: [505861](https://review.lineageos.org/c/505861))*
- **[LineageOS/android_hardware_qcom_audio-ar]** core: Add getFlushFromFrameSupport and mark unsupported *(ID: [505860](https://review.lineageos.org/c/505860))*
- **[LineageOS/android_hardware_qcom_audio-ar]** core: Select parrot VINTF fargment for taro (cape|waipio) *(ID: [505858](https://review.lineageos.org/c/505858))*
- **[LineageOS/android_vendor_qcom_opensource_arpal-lx]** pal: Fix compile errors on android-16.0.0_r4 *(ID: [505855](https://review.lineageos.org/c/505855))*
- **[LineageOS/android_kernel_motorola_sm8250]** Merge remote-tracking branch 'sm8250/lineage-20' into HEAD *(ID: [505878](https://review.lineageos.org/c/505878))*
- **[LineageOS/android_kernel_fxtec_sm6115]** Merge remote-tracking branch 'sm8250/lineage-20' into HEAD *(ID: [505877](https://review.lineageos.org/c/505877))*
- **[LineageOS/android_kernel_qcom_sm8250]** Merge tag 'LA.UM.9.15.2.c26-08000-KAMORTA.QSSI13c26.0' of https://git.codelinaro.org/clo/la/platform/vendor/opensource/camera-kernel into HEAD *(ID: [506059](https://review.lineageos.org/c/506059))*
- **[LineageOS/android_device_mainline_generic]** mainline/generic: docs: boot-parameters: Fix the addon fstab location *(ID: [506054](https://review.lineageos.org/c/506054))*
- **[LineageOS/android_hardware_mainline_common]** mainline/common: grub: Add detailed READMEs *(ID: [506051](https://review.lineageos.org/c/506051))*
- **[LineageOS/android_hardware_mainline_common]** mainline/common: docs: Add WIRING_A_HAL.md *(ID: [506050](https://review.lineageos.org/c/506050))*
- **[LineageOS/android_device_samsung_sm7125-common]** sm7125-common: enable fixed `camera_module_t` layout *(ID: [506034](https://review.lineageos.org/c/506034))*
- **[LineageOS/android_hardware_mediatek]** aidl: add bluetooth audio session AIDL adapter *(ID: [505223](https://review.lineageos.org/c/505223))*
- **[LineageOS/android_hardware_mediatek]** aidl: add bluetooth audio session HIDL adapter *(ID: [504900](https://review.lineageos.org/c/504900))*
- **[LineageOS/android_hardware_mediatek]** hidl: audio: Make more universally usable *(ID: [504899](https://review.lineageos.org/c/504899))*
- **[LineageOS/android_vendor_qcom_opensource_system_bt]** [RESTRICT AUTOMERGE] Fix SDP server heap buffer overflow *(ID: [506028](https://review.lineageos.org/c/506028))*
- **[LineageOS/android_frameworks_av]** Camera: Fix heap OOB read/write in camera mappers *(ID: [506021](https://review.lineageos.org/c/506021))*
- **[LineageOS/android_frameworks_av]** Fix MediaBuffer size-inflation off-by-32 bug *(ID: [506019](https://review.lineageos.org/c/506019))*
- **[LineageOS/android_frameworks_base]** [BACKPORT] Fix boot-loop vulnerability in setPermissionGrantState *(ID: [506018](https://review.lineageos.org/c/506018))*

</details>

## 📱 Línea Motorola Activa (16)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_beckham]** beckham: audio: Route audio Moto Mods through usb-headset paths *(ID: [505943](https://review.lineageos.org/c/505943))*
- **[LineageOS/android_kernel_motorola_sm8550]** Merge branch 'lineage-21' of github.com:LineageOS/android_kernel_qcom_sm8550 into HEAD *(ID: [506084](https://review.lineageos.org/c/506084))*
- **[LineageOS/android_device_motorola_rtwo]** rtwo: Frameworks: Tune low-lux auto-brightness curve and debounce *(ID: [506065](https://review.lineageos.org/c/506065))*
- **[LineageOS/android_device_motorola_beckham]** beckham: Bring back the prebuilt audio HAL *(ID: [506063](https://review.lineageos.org/c/506063))*
- **[LineageOS/android_device_motorola_milanf]** milanf: Handle dt2w through power HAL extension *(ID: [479977](https://review.lineageos.org/c/479977))*
- **[LineageOS/android_device_motorola_milanf]** milanf: Add common libqti-perfd-client to namespaces *(ID: [479978](https://review.lineageos.org/c/479978))*
- **[LineageOS/android_kernel_motorola_sm8250]** Merge remote-tracking branch 'sm8250/lineage-20' into HEAD *(ID: [505878](https://review.lineageos.org/c/505878))*
- **[LineageOS/android_device_motorola_xpeng]** xpeng: Increase auto brightness light bouce/debounce *(ID: [506060](https://review.lineageos.org/c/506060))*
- **[LineageOS/android_kernel_motorola_sm6225]** arm64: configs: guamna: Build moto modules *(ID: [501509](https://review.lineageos.org/c/501509))*
- **[LineageOS/android_kernel_motorola_sm6225]** techpack: camera-bengal: Enable legacy camera fix for guamna *(ID: [501508](https://review.lineageos.org/c/501508))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: himax_v3_mmi: Fix CFI failure in module init *(ID: [501505](https://review.lineageos.org/c/501505))*
- **[LineageOS/android_device_motorola_smith]** smith: Allow setting independent dpi settings for each display *(ID: [503084](https://review.lineageos.org/c/503084))*
- **[LineageOS/android_device_motorola_smith]** smith: Drop soundtrigger HAL *(ID: [505698](https://review.lineageos.org/c/505698))*
- **[LineageOS/android_device_motorola_smith]** smith: Use MMI touchscreen class to toggle dt2w [2/2] *(ID: [505697](https://review.lineageos.org/c/505697))*
- **[LineageOS/android_device_motorola_smith]** smith: overlay: Update deprecated screen power items *(ID: [505696](https://review.lineageos.org/c/505696))*
- **[LineageOS/android_hardware_motorola]** MotoActions: remove help dialog *(ID: [505404](https://review.lineageos.org/c/505404))*

</details>

---
*Generado automáticamente por Ra Pulse*
