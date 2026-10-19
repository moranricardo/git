# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-19-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (223)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_samsung]** aidl: sensors: Allow hiding the device orientation sensor *(ID: [507778](https://review.lineageos.org/c/507778))*
- **[LineageOS/android_hardware_qcom_audio]** hal: audio_extn: Fix null thread join in BatteryListener teardown *(ID: [504423](https://review.lineageos.org/c/504423))*
- **[LineageOS/android_hardware_samsung]** aidl: sensors: Allow flipping device orientation while folded *(ID: [507777](https://review.lineageos.org/c/507777))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Update encoder o/p buffer size calc *(ID: [509288](https://review.lineageos.org/c/509288))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Enable vidc driver for sdm845 *(ID: [509014](https://review.lineageos.org/c/509014))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Map NV12 to 128 alignment for decoder/encoder *(ID: [509013](https://review.lineageos.org/c/509013))*
- **[LineageOS/android_kernel_qcom_sm8250]** include: uapi: Duplicate the msm_media_info header *(ID: [509012](https://review.lineageos.org/c/509012))*
- **[LineageOS/android_kernel_qcom_sm8250]** video-driver: reduce the input frame size for vp9d *(ID: [509011](https://review.lineageos.org/c/509011))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Fix for encode failure on resolution 720p & above on SA6155P *(ID: [509010](https://review.lineageos.org/c/509010))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Avoid setting HFI_PROPERTY_PARAM_HEVC_PPS_CB_CR_OFFSET for Gen3 VPUs *(ID: [509009](https://review.lineageos.org/c/509009))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: update VP9 level ranges *(ID: [509008](https://review.lineageos.org/c/509008))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: check for cvp support *(ID: [509007](https://review.lineageos.org/c/509007))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Ping hardware during timeouts *(ID: [509006](https://review.lineageos.org/c/509006))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Copy hfi buf req to hal buf req *(ID: [509005](https://review.lineageos.org/c/509005))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Add HFI backward compatibility *(ID: [509004](https://review.lineageos.org/c/509004))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Enable decode batching for sdm845 *(ID: [509003](https://review.lineageos.org/c/509003))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Disable unsupported features for sdm845 *(ID: [509002](https://review.lineageos.org/c/509002))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Add sdm845 capabilities *(ID: [509001](https://review.lineageos.org/c/509001))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: msm_media_info_legacy: Import buffer alignment changes from kernel 4.9 *(ID: [506931](https://review.lineageos.org/c/506931))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Don't set VBV HRD buffer size on sdm845 *(ID: [506885](https://review.lineageos.org/c/506885))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Use older alignments(128x32) for NV12 format *(ID: [506796](https://review.lineageos.org/c/506796))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm_media_info_legacy: Revert "msm: media: uapi: Redefine NV12 format with different alignment" *(ID: [506795](https://review.lineageos.org/c/506795))*
- **[LineageOS/android_kernel_fairphone_sm7635]** misc: haptic_hv: Parse wave lengths from haptic_ram.bin *(ID: [506310](https://review.lineageos.org/c/506310))*
- **[LineageOS/android_kernel_fairphone_sm7635]** misc: haptic_hv: aw8693x: Program sequencer wait slot unit *(ID: [506311](https://review.lineageos.org/c/506311))*
- **[LineageOS/android_kernel_fairphone_sm7635]** misc: haptic_hv: Apply effect strength *(ID: [506313](https://review.lineageos.org/c/506313))*
- **[LineageOS/android_kernel_fairphone_sm7635]** misc: haptic_hv: Implement QTI vibrator HAL effects *(ID: [506312](https://review.lineageos.org/c/506312))*
- **[LineageOS/android_kernel_fairphone_sm7635]** misc: haptic_hv: Support sequencer loop feature *(ID: [509275](https://review.lineageos.org/c/509275))*
- **[LineageOS/android_kernel_fairphone_sm7635]** misc: haptic_hv: Implement primitives *(ID: [509276](https://review.lineageos.org/c/509276))*
- **[LineageOS/android_kernel_fairphone_sm7635]** misc: haptic_hv: Add table for custom haptic_ram.bin *(ID: [509277](https://review.lineageos.org/c/509277))*
- **[LineageOS/android_hardware_mediatek]** wlan: Import MediaTek wpa_supplicant config *(ID: [509287](https://review.lineageos.org/c/509287))*

</details>

## 📱 Línea Motorola Activa (19)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_mt6765-common]** mt6765-common: Drop PRODUCT_BUILD_SUPER_PARTITION *(ID: [509293](https://review.lineageos.org/c/509293))*
- **[LineageOS/android_device_motorola_smith]** smith: Switch to common lights HAL *(ID: [509273](https://review.lineageos.org/c/509273))*
- **[LineageOS/android_device_motorola_smith]** smith: Tweak inner display status bar for usability *(ID: [509263](https://review.lineageos.org/c/509263))*
- **[LineageOS/android_device_motorola_smith]** smith: Increase outer display status bar padding *(ID: [509262](https://review.lineageos.org/c/509262))*
- **[LineageOS/android_device_motorola_smith]** smith: Allow setting independent dpi settings for each display *(ID: [507356](https://review.lineageos.org/c/507356))*
- **[LineageOS/android_hardware_motorola]** MotoActions: Add open to answer action *(ID: [509260](https://review.lineageos.org/c/509260))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Switch to minimal product partition size *(ID: [509230](https://review.lineageos.org/c/509230))*
- **[LineageOS/android_device_motorola_mt6768-common]** mt6768-common: Build lbs and netdagent HIDL from source *(ID: [509226](https://review.lineageos.org/c/509226))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Move strongbox keystore permission to vendor *(ID: [509095](https://review.lineageos.org/c/509095))*
- **[LineageOS/android_device_motorola_mt6768-common]** mt6768-common: Build AOSP IWlan and QNS packages *(ID: [509077](https://review.lineageos.org/c/509077))*
- **[LineageOS/android_device_motorola_miami]** miami: audio: Add missing Fluence NN mixer paths *(ID: [509076](https://review.lineageos.org/c/509076))*
- **[LineageOS/android_hardware_motorola]** motorola: face: Add HAL wrapper for Motorola ArcSoft face unlock APK *(ID: [507962](https://review.lineageos.org/c/507962))*
- **[LineageOS/android_device_motorola_sm7325-common]** sm7325-common: Ship Motorola face unlock *(ID: [508370](https://review.lineageos.org/c/508370))*
- **[LineageOS/android_device_motorola_dubai]** dubai: Commonize blobs for Face Unlock *(ID: [508371](https://review.lineageos.org/c/508371))*
- **[LineageOS/android_device_motorola_berlna]** berlna: Commonize blobs for Face Unlock *(ID: [508374](https://review.lineageos.org/c/508374))*
- **[LineageOS/android_device_motorola_berlin]** berlin: Commonize blobs for Face Unlock *(ID: [508548](https://review.lineageos.org/c/508548))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: Ship Motorola face unlock *(ID: [507961](https://review.lineageos.org/c/507961))*
- **[LineageOS/android_device_motorola_rtwo]** rtwo: Rerun beautify_rro *(ID: [507959](https://review.lineageos.org/c/507959))*
- **[LineageOS/android_device_motorola_rtwo]** rtwo: Commonize blobs for Face Unlock *(ID: [507958](https://review.lineageos.org/c/507958))*

</details>

---
*Generado automáticamente por Ra Pulse*
