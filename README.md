# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-27-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (178)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_device_xiaomi_gauguin]** gauguin: ultrasound: Fix function types *(ID: [510540](https://review.lineageos.org/c/510540))*
- **[LineageOS/android_device_xiaomi_gauguin]** gauguin: audio: Fix low latency VoIP echo reference ports *(ID: [510550](https://review.lineageos.org/c/510550))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Re-select the ultrasound RX device in select_devices() *(ID: [510584](https://review.lineageos.org/c/510584))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Follow stock codec backend configuration *(ID: [510583](https://review.lineageos.org/c/510583))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Skip audio calibration for the ultrasound usecases *(ID: [510582](https://review.lineageos.org/c/510582))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Add SND_DEVICE_OUT_ULTRASOUND *(ID: [510581](https://review.lineageos.org/c/510581))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Give the RX usecase its own output stream *(ID: [510580](https://review.lineageos.org/c/510580))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Follow stock wired headset handling *(ID: [510579](https://review.lineageos.org/c/510579))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Drop the ultrasound RX device override on backend switch *(ID: [510578](https://review.lineageos.org/c/510578))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Use stock ultrasound usecase names *(ID: [510577](https://review.lineageos.org/c/510577))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Default the RX device to the voice handset *(ID: [510576](https://review.lineageos.org/c/510576))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Enable the Elliptic engine on start *(ID: [510575](https://review.lineageos.org/c/510575))*
- **[LineageOS/android_hardware_qcom_audio]** hal: audio_hw: Guard us_init() and us_deinit() *(ID: [510574](https://review.lineageos.org/c/510574))*
- **[LineageOS/android_hardware_qcom_audio]** Revert "hal: Set sample rate to 96 KHz for ultrasound" *(ID: [510573](https://review.lineageos.org/c/510573))*
- **[LineageOS/android_hardware_qcom_audio]** hal: gauguin: Use stock ultrasound mixer paths *(ID: [510572](https://review.lineageos.org/c/510572))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Use stock pcm period count *(ID: [510571](https://review.lineageos.org/c/510571))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Set sample rate to 96 KHz for ultrasound *(ID: [510570](https://review.lineageos.org/c/510570))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Ignore ultrasound usecase in select_devices() *(ID: [510569](https://review.lineageos.org/c/510569))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Guard us_get_output_snd_device() against missing state *(ID: [510568](https://review.lineageos.org/c/510568))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Select output device dynamically *(ID: [510567](https://review.lineageos.org/c/510567))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Add SND_DEVICE_IN_ULTRASOUND_MIC to ACDB table *(ID: [510566](https://review.lineageos.org/c/510566))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Remove SND_DEVICE_OUT_ULTRASOUND_HANDSET *(ID: [510565](https://review.lineageos.org/c/510565))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Remove default ultrasound PCM ID *(ID: [510564](https://review.lineageos.org/c/510564))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Implement RampDown *(ID: [510563](https://review.lineageos.org/c/510563))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Set stream.out *(ID: [510562](https://review.lineageos.org/c/510562))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Declare internal symbols as `static` *(ID: [510561](https://review.lineageos.org/c/510561))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Refactor errors handling *(ID: [510560](https://review.lineageos.org/c/510560))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Handle `pcm_start()` failure *(ID: [510559](https://review.lineageos.org/c/510559))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Initialize devices list *(ID: [510558](https://review.lineageos.org/c/510558))*
- **[LineageOS/android_hardware_qcom_audio]** hal: ultrasound: Fix deinit *(ID: [510557](https://review.lineageos.org/c/510557))*

</details>

## 📱 Línea Motorola Activa (18)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Rename MotoNrEnabler to MotoExtTelephony *(ID: [510354](https://review.lineageos.org/c/510354))*
- **[LineageOS/android_device_motorola_sm6375-common]** sm6375-common: Rename MotoNrEnabler to MotoExtTelephony *(ID: [510352](https://review.lineageos.org/c/510352))*
- **[LineageOS/android_device_motorola_sm7325-common]** sm7325-common: Rename MotoNrEnabler to MotoExtTelephony *(ID: [510353](https://review.lineageos.org/c/510353))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: Rename MotoNrEnabler to MotoExtTelephony *(ID: [510357](https://review.lineageos.org/c/510357))*
- **[LineageOS/android_device_motorola_sm6225-common]** sm6225-common: Add fallback SW A2DP routes *(ID: [510456](https://review.lineageos.org/c/510456))*
- **[LineageOS/android_device_motorola_sm6375-common]** sm6375-common: Add fallback SW A2DP routes *(ID: [510455](https://review.lineageos.org/c/510455))*
- **[LineageOS/android_hardware_motorola]** Reland "MotoNrEnabler: Rename to MotoExtTelephony" *(ID: [510349](https://review.lineageos.org/c/510349))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Rename MotoNrEnabler to MotoExtTelephony *(ID: [510356](https://review.lineageos.org/c/510356))*
- **[LineageOS/android_device_motorola_sm8250-common]** sm8250-common: Rename MotoNrEnabler to MotoExtTelephony *(ID: [510355](https://review.lineageos.org/c/510355))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Rename MotoNrEnabler to MotoExtTelephony *(ID: [510065](https://review.lineageos.org/c/510065))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Switch to minimal product partition size *(ID: [509230](https://review.lineageos.org/c/509230))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Remove disable_configstore from PRODUCT_PACKAGES *(ID: [502212](https://review.lineageos.org/c/502212))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: fastbootd is now enabled by default *(ID: [502211](https://review.lineageos.org/c/502211))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Use legacy libion implementation *(ID: [502210](https://review.lineageos.org/c/502210))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: power-libperfmgr: Update included soong namespace *(ID: [502209](https://review.lineageos.org/c/502209))*
- **[LineageOS/android_device_motorola_smith]** smith: Enable switching between eSIM and pSIM *(ID: [509760](https://review.lineageos.org/c/509760))*
- **[LineageOS/android_device_motorola_smith]** smith: Add proprietary-firmware.txt *(ID: [510086](https://review.lineageos.org/c/510086))*
- **[LineageOS/android_device_motorola_smith]** smith: Update blobs to 12 S2PS32.57-23-21 c382c9-50dbcb - RETEU *(ID: [510085](https://review.lineageos.org/c/510085))*

</details>

---
*Generado automáticamente por Ra Pulse*
