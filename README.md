# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-30-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (135)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_device_amlogic_g12-common]** g12: Fix voldmanaged USB glob for the Amlogic xHCI name *(ID: [496038](https://review.lineageos.org/c/496038))*
- **[LineageOS/android_kernel_oneplus_sm8150]** usb: gadget: fix configfs reads of an absent ethernet net_device *(ID: [511042](https://review.lineageos.org/c/511042))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Label smith power supply and vibrator nodes *(ID: [511000](https://review.lineageos.org/c/511000))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Label smith wakeup, touchscreen and extcon nodes *(ID: [510922](https://review.lineageos.org/c/510922))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Address fpc fingerprint denials *(ID: [510921](https://review.lineageos.org/c/510921))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Allow init.mmi.laser.sh to restore calibration *(ID: [510920](https://review.lineageos.org/c/510920))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Allow sensors HAL to access uhid *(ID: [510919](https://review.lineageos.org/c/510919))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Label adspd hwservice, sysfs and properties *(ID: [510918](https://review.lineageos.org/c/510918))*
- **[LineageOS/android_hardware_motorola]** MotoActions: Only enable proximity sensor while handling chop *(ID: [511001](https://review.lineageos.org/c/511001))*
- **[LineageOS/android_device_motorola_nairo]** nairo: audio_amplifier: Fix PCM device check *(ID: [428922](https://review.lineageos.org/c/428922))*
- **[LineageOS/android_device_motorola_nairo]** nairo: amplifier: Fix device list initializations *(ID: [428918](https://review.lineageos.org/c/428918))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Fix fsg mount context *(ID: [510917](https://review.lineageos.org/c/510917))*
- **[LineageOS/android_device_samsung_slsi_sepolicy]** common: Fix charger mode denials *(ID: [510691](https://review.lineageos.org/c/510691))*
- **[LineageOS/android_kernel_qcom_sm8250]** Revert "f2fs: fix out-of-bounds access in sysfs attribute read/write" *(ID: [510724](https://review.lineageos.org/c/510724))*
- **[LineageOS/android_hardware_qcom_display]** hal: Define `oplus_reserve_aod_30hz` soong variable *(ID: [508974](https://review.lineageos.org/c/508974))*
- **[LineageOS/android_hardware_samsung]** argosd: Introduce Argos Daemon *(ID: [509705](https://review.lineageos.org/c/509705))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Fix max number of SAP peers *(ID: [510959](https://review.lineageos.org/c/510959))*
- **[LineageOS/android_kernel_qcom_sm8750-modules]** Add 'qcom/opensource/display-drivers-5.10/' from commit '7cd14e1c3fe7ae4678459c52827a695bc1b9c12a' *(ID: [511013](https://review.lineageos.org/c/511013))*
- **[LineageOS/android_kernel_qcom_sm8750-modules]** display-drivers-5.10: Rename Soong header modules *(ID: [511019](https://review.lineageos.org/c/511019))*
- **[LineageOS/android_kernel_qcom_sm8750-modules]** display-drivers-5.10: Track kernel and modules path change for vendor kernel *(ID: [511018](https://review.lineageos.org/c/511018))*
- **[LineageOS/android_kernel_qcom_sm8750-modules]** display-drivers-5.10: Track kernel and modules path change *(ID: [511017](https://review.lineageos.org/c/511017))*
- **[LineageOS/android_kernel_qcom_sm8750-modules]** display-drivers-5.10: Fix inline build *(ID: [511016](https://review.lineageos.org/c/511016))*
- **[LineageOS/android_kernel_qcom_sm8750-modules]** display-drivers-5.10: Don't override CONFIG_DRM_MSM in Makefile *(ID: [511015](https://review.lineageos.org/c/511015))*
- **[LineageOS/android_kernel_qcom_sm8750-modules]** display-drivers-5.10: Remove build timestamp injection *(ID: [511014](https://review.lineageos.org/c/511014))*
- **[LineageOS/android_kernel_ayn_cq8725s]** BACKPORT: thermal: gov_step_wise: Fix stale mitigation vote with non-zero lower bounds *(ID: [511012](https://review.lineageos.org/c/511012))*
- **[LineageOS/android_kernel_ayn_cq8725s]** BACKPORT: thermal: gov_step_wise: Use trip thresholds instead of trip temperatures *(ID: [511011](https://review.lineageos.org/c/511011))*
- **[LineageOS/android_kernel_ayn_cq8725s]** BACKPORT: thermal: gov_step_wise: Use .manage() callback instead of .throttle() *(ID: [511010](https://review.lineageos.org/c/511010))*
- **[LineageOS/android_kernel_ayn_cq8725s]** BACKPORT: thermal: core: Introduce .manage() callback for thermal governors *(ID: [511009](https://review.lineageos.org/c/511009))*
- **[LineageOS/android_kernel_ayn_cq8725s]** BACKPORT: thermal: core: Add trip thresholds for trip crossing detection *(ID: [511008](https://review.lineageos.org/c/511008))*
- **[LineageOS/android_kernel_ayn_cq8725s-devicetrees]** moorechip: Increase CPU and GPU fan trip hysteresis *(ID: [511007](https://review.lineageos.org/c/511007))*

</details>

## 📱 Línea Motorola Activa (104)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_caprip]** caprip: props: Move SKU specific properties to product partition *(ID: [510703](https://review.lineageos.org/c/510703))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Label smith power supply and vibrator nodes *(ID: [511000](https://review.lineageos.org/c/511000))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Label smith wakeup, touchscreen and extcon nodes *(ID: [510922](https://review.lineageos.org/c/510922))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Address fpc fingerprint denials *(ID: [510921](https://review.lineageos.org/c/510921))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Allow init.mmi.laser.sh to restore calibration *(ID: [510920](https://review.lineageos.org/c/510920))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Allow sensors HAL to access uhid *(ID: [510919](https://review.lineageos.org/c/510919))*
- **[LineageOS/android_hardware_motorola]** sepolicy: Label adspd hwservice, sysfs and properties *(ID: [510918](https://review.lineageos.org/c/510918))*
- **[LineageOS/android_device_motorola_smith]** smith: Drop sepolicy moved to hardware/motorola *(ID: [510999](https://review.lineageos.org/c/510999))*
- **[LineageOS/android_device_motorola_smith]** smith: sepolicy: Drop numbered wakeup labels *(ID: [510893](https://review.lineageos.org/c/510893))*
- **[LineageOS/android_device_motorola_smith]** smith: Commonize audio HAL build target *(ID: [511038](https://review.lineageos.org/c/511038))*
- **[LineageOS/android_device_motorola_smith]** smith: Load CS35L41 speaker calibration *(ID: [510895](https://review.lineageos.org/c/510895))*
- **[LineageOS/android_device_motorola_smith]** smith: Set stock fast track multiplier *(ID: [510894](https://review.lineageos.org/c/510894))*
- **[LineageOS/android_device_motorola_smith]** smith: Switch to qcom audio effects *(ID: [511037](https://review.lineageos.org/c/511037))*
- **[LineageOS/android_device_motorola_smith]** smith: audio: Load motvr hotword capture module *(ID: [510890](https://review.lineageos.org/c/510890))*
- **[LineageOS/android_device_motorola_smith]** smith: import soundtrigger bits from common *(ID: [510889](https://review.lineageos.org/c/510889))*
- **[LineageOS/android_device_motorola_smith]** smith: Resolve soundtrigger deps *(ID: [510888](https://review.lineageos.org/c/510888))*
- **[LineageOS/android_device_motorola_smith]** Revert "smith: Drop soundtrigger HAL" *(ID: [510887](https://review.lineageos.org/c/510887))*
- **[LineageOS/android_device_motorola_smith]** smith: Move recovery UI margins to BoardConfig *(ID: [510886](https://review.lineageos.org/c/510886))*
- **[LineageOS/android_device_motorola_smith]** smith: Patch com.vidhance.node.processing.so to allocate GraphicBuffer with new size *(ID: [510885](https://review.lineageos.org/c/510885))*
- **[LineageOS/android_device_motorola_smith]** smith: Rename camera.mot.is.coming.cts *(ID: [510884](https://review.lineageos.org/c/510884))*
- **[LineageOS/android_hardware_motorola]** MotoActions: Only enable proximity sensor while handling chop *(ID: [511001](https://review.lineageos.org/c/511001))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Drop MotCamera2 *(ID: [511025](https://review.lineageos.org/c/511025))*
- **[LineageOS/android_device_motorola_nairo]** nairo: overlay-lineage: Reconfigure aux cameras for Aperture *(ID: [510947](https://review.lineageos.org/c/510947))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Use linear preview buffers for camera *(ID: [510946](https://review.lineageos.org/c/510946))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Disable fluence in calls *(ID: [428928](https://review.lineageos.org/c/428928))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Build audio & soundtrigger HALs from source *(ID: [428927](https://review.lineageos.org/c/428927))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Switch to qcom audio effects *(ID: [428926](https://review.lineageos.org/c/428926))*
- **[LineageOS/android_device_motorola_nairo]** nairo: audio_amplifier: Use hw_module_t->dso instead of RTLD_NEXT *(ID: [428925](https://review.lineageos.org/c/428925))*
- **[LineageOS/android_device_motorola_nairo]** nairo: Convert audio_amplifier to blueprint *(ID: [428924](https://review.lineageos.org/c/428924))*
- **[LineageOS/android_device_motorola_nairo]** nairo: audio_amplifier: Make all the functions static *(ID: [428923](https://review.lineageos.org/c/428923))*

</details>

---
*Generado automáticamente por Ra Pulse*
