# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-25-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (298)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_lineage_compat]** libhardware_legacy: Shim `uevent_next_event_timeout` *(ID: [510077](https://review.lineageos.org/c/510077))*
- **[LineageOS/android_kernel_qcom_sm8250]** mm/cma: add sysfs file 'release_pages_success' *(ID: [510000](https://review.lineageos.org/c/510000))*
- **[LineageOS/android_hardware_motorola]** MotoNrEnabler: Rename to MotoExtTelephony *(ID: [509924](https://review.lineageos.org/c/509924))*
- **[LineageOS/android_kernel_qcom_sm8250]** mm/cma: change cma mutex to irq safe spinlock *(ID: [510064](https://review.lineageos.org/c/510064))*
- **[LineageOS/android_kernel_qcom_sm8250]** mm: cma: add the CMA instance name to cma trace events *(ID: [509999](https://review.lineageos.org/c/509999))*
- **[LineageOS/android_kernel_samsung_sm8250]** Merge remote-tracking branch 'sm8250/lineage-20' into HEAD *(ID: [510059](https://review.lineageos.org/c/510059))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** defconfig: aml: Do not disable BTF so it can be used for BPF programs *(ID: [510069](https://review.lineageos.org/c/510069))*
- **[LineageOS/android_hardware_qcom_display]** composer: Don't commit early when a layer requests CURSOR *(ID: [510068](https://review.lineageos.org/c/510068))*
- **[LineageOS/android_hardware_qcom_display]** hwc2: cursor fixes *(ID: [510067](https://review.lineageos.org/c/510067))*
- **[LineageOS/android_hardware_qcom_display]** Revert "composer: Skip device composition for cursor layer" *(ID: [510066](https://review.lineageos.org/c/510066))*
- **[LineageOS/android_hardware_lineage_generic-ims]** carriersettings: Update from blazer CP3A.261005.005 *(ID: [510053](https://review.lineageos.org/c/510053))*
- **[LineageOS/android_kernel_qcom_sm8250]** debugfs: make sure we can remove u32_array files cleanly *(ID: [510063](https://review.lineageos.org/c/510063))*
- **[LineageOS/android_kernel_qcom_sm8250]** debugfs: make debugfs_create_u32_array() return void *(ID: [510062](https://review.lineageos.org/c/510062))*
- **[LineageOS/android_kernel_qcom_sm8250]** debugfs: update documented return values of debugfs helpers *(ID: [510061](https://review.lineageos.org/c/510061))*
- **[LineageOS/android_kernel_qcom_sm8250]** ANDROID: ARM64: enable CONFIG_CMA_SYSFS *(ID: [509998](https://review.lineageos.org/c/509998))*
- **[LineageOS/android_kernel_qcom_sm8250]** mm: cma: support sysfs *(ID: [509997](https://review.lineageos.org/c/509997))*
- **[LineageOS/android_kernel_qcom_sm8250]** mm: cma: fix the name of CMA areas *(ID: [509996](https://review.lineageos.org/c/509996))*
- **[LineageOS/android_kernel_qcom_sm8250]** BACKPORT: kbuild: add all Clang-specific flags unconditionally *(ID: [510028](https://review.lineageos.org/c/510028))*
- **[LineageOS/android_kernel_qcom_sm8250]** Revert "AndroidKernel: Add LLVM support for Kernel" *(ID: [510027](https://review.lineageos.org/c/510027))*
- **[LineageOS/android_kernel_qcom_sm8250]** mm: vmstat: add cma statistics *(ID: [509995](https://review.lineageos.org/c/509995))*
- **[LineageOS/android_kernel_qcom_sm8250]** mm/cma.c: fix NULL pointer dereference when cma could not be activated *(ID: [509994](https://review.lineageos.org/c/509994))*
- **[LineageOS/android_hardware_qcom_display]** composer: Present RC mask layers as topmost *(ID: [510060](https://review.lineageos.org/c/510060))*
- **[LineageOS/android_kernel_amlogic_kernel-5.15]** UPSTREAM: bpf: Fix truncated dmabuf iterator reads *(ID: [510057](https://review.lineageos.org/c/510057))*
- **[LineageOS/android_kernel_amlogic_kernel-5.15]** BACKPORT: bpf: Add dmabuf iterator *(ID: [510056](https://review.lineageos.org/c/510056))*
- **[LineageOS/android_kernel_amlogic_kernel-5.15]** BACKPORT: dma-buf: Rename debugfs symbols *(ID: [510055](https://review.lineageos.org/c/510055))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_graphics]** libhwc2.1: s5e8825: Adapt to the SoC *(ID: [507685](https://review.lineageos.org/c/507685))*
- **[LineageOS/android_device_realme_pista]** pista: camera: Fix 3-10x zoom on cameraId 0 *(ID: [510036](https://review.lineageos.org/c/510036))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_graphics]** libhwc2.1: s5e8825: Remove support for TDM based resource allocation *(ID: [507684](https://review.lineageos.org/c/507684))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_graphics]** libhwc2.1: s5e8825: Add back AFBC logic *(ID: [507683](https://review.lineageos.org/c/507683))*
- **[LineageOS/android_device_google_caimito]** caimito: Fix BuildSystemDesc in PRODUCT_BUILD_PROP_OVERRIDES *(ID: [510034](https://review.lineageos.org/c/510034))*

</details>

## 📱 Línea Motorola Activa (17)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Switch to minimal product partition size *(ID: [509230](https://review.lineageos.org/c/509230))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Remove disable_configstore from PRODUCT_PACKAGES *(ID: [502212](https://review.lineageos.org/c/502212))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: fastbootd is now enabled by default *(ID: [502211](https://review.lineageos.org/c/502211))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Use legacy libion implementation *(ID: [502210](https://review.lineageos.org/c/502210))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: power-libperfmgr: Update included soong namespace *(ID: [502209](https://review.lineageos.org/c/502209))*
- **[LineageOS/android_hardware_motorola]** MotoNrEnabler: Rename to MotoExtTelephony *(ID: [509924](https://review.lineageos.org/c/509924))*
- **[LineageOS/android_device_motorola_smith]** smith: Enable switching between eSIM and pSIM *(ID: [509760](https://review.lineageos.org/c/509760))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Rename MotoNrEnabler to MotoExtTelephony *(ID: [510065](https://review.lineageos.org/c/510065))*
- **[LineageOS/android_hardware_motorola]** MotoNrEnabler: Add legacy sim switching *(ID: [509656](https://review.lineageos.org/c/509656))*
- **[LineageOS/android_device_motorola_sm6225-common]** sm6225-common: More notification icons on lockscreen *(ID: [509899](https://review.lineageos.org/c/509899))*
- **[LineageOS/android_device_motorola_sm6375-common]** sm6375-common: More notification icons on lockscreen *(ID: [509898](https://review.lineageos.org/c/509898))*
- **[LineageOS/android_device_motorola_sm6375-common]** sm6375-common: More notification icons on AOD screen *(ID: [509897](https://review.lineageos.org/c/509897))*
- **[LineageOS/android_device_motorola_smith]** smith: Hide user facing crash dialog for EUICC app *(ID: [509874](https://review.lineageos.org/c/509874))*
- **[LineageOS/android_device_motorola_smith]** smith: Add eUICC support *(ID: [509314](https://review.lineageos.org/c/509314))*
- **[LineageOS/android_device_motorola_fogos]** fogos: Migrate to MotoEuicc *(ID: [468416](https://review.lineageos.org/c/468416))*
- **[LineageOS/android_device_motorola_fogo]** fogo: Migrate to MotoEuicc *(ID: [468415](https://review.lineageos.org/c/468415))*
- **[LineageOS/android_device_motorola_bangkk]** bangkk: Migrate to MotoEuicc *(ID: [468414](https://review.lineageos.org/c/468414))*

</details>

---
*Generado automáticamente por Ra Pulse*
