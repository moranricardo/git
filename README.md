# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-11-18-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (279)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_device_radxa_radxa0_tab]** radxa0_tab: Fix fastboot flashall *(ID: [514070](https://review.lineageos.org/c/514070))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** gralloc4: Add BOARD_GRALLOC_DPU_NO_AFBC *(ID: [514065](https://review.lineageos.org/c/514065))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** config: exynos9830: Configure Codec2 *(ID: [514021](https://review.lineageos.org/c/514021))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** config: exynos9830: Switch to gralloc4 *(ID: [513556](https://review.lineageos.org/c/513556))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** config: exynos850: Configure Codec2 *(ID: [513245](https://review.lineageos.org/c/513245))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** config: exynos850: Switch to gralloc4 *(ID: [513244](https://review.lineageos.org/c/513244))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** config: exynos9820: Configure Codec2 *(ID: [513012](https://review.lineageos.org/c/513012))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** openmax: Add BOARD_DEC_USE_VIDEO_DECODER_USAGE *(ID: [513011](https://review.lineageos.org/c/513011))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** config: exynos9820: Switch to gralloc4 *(ID: [512852](https://review.lineageos.org/c/512852))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** gralloc4: Add BOARD_GRALLOC4_LEGACY_V3_HANDLE *(ID: [512851](https://review.lineageos.org/c/512851))*
- **[LineageOS/android_kernel_qcom_sm8250]** ipv6: Handle all fib6_nh in a nexthop in fib6_drop_pcpu_from *(ID: [514030](https://review.lineageos.org/c/514030))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Guard DPU AFBC basic support *(ID: [514042](https://review.lineageos.org/c/514042))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Import GrallocMapperCamera from Gralloc3 and adapt *(ID: [513377](https://review.lineageos.org/c/513377))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: boot: dts: amlogic: sm1_s905x3_bananapim5: add Wi-Fi and Bluetooth overlay *(ID: [514051](https://review.lineageos.org/c/514051))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: amlogic: sm1_s905x3_bananapim5: make Banana Pi M5 specific changes *(ID: [514050](https://review.lineageos.org/c/514050))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: boot: dts: amlogic: rebrand sm1_s905d3_ac200 to sm1_s905x3_bananapim5 *(ID: [514049](https://review.lineageos.org/c/514049))*
- **[LineageOS/android_device_oneplus_sm8850-common]** sm8850-common: Fix Codec2 HAL manifest versions *(ID: [510909](https://review.lineageos.org/c/510909))*
- **[LineageOS/android_device_oneplus_infiniti]** infiniti: Fix offline camera HAL manifest version *(ID: [510913](https://review.lineageos.org/c/510913))*
- **[LineageOS/android_device_oneplus_sm8850-common]** sm8850-common: Fix Wireless Display casting *(ID: [512759](https://review.lineageos.org/c/512759))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: nova_0flash_mmi: Start boot firmware download on display on *(ID: [512758](https://review.lineageos.org/c/512758))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: nova_0flash_mmi: Make boot firmware delay configurable *(ID: [512757](https://review.lineageos.org/c/512757))*
- **[LineageOS/android_kernel_motorola_sm6225]** techpack: display: msm: fix HBM backlight race with display disable *(ID: [512756](https://review.lineageos.org/c/512756))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Translate the AFBC modifiers for the gralloc3 compatible handle *(ID: [513246](https://review.lineageos.org/c/513246))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: libexynosgraphicbuffer: Mirror the dataspace to the gralloc3 attr_region *(ID: [513006](https://review.lineageos.org/c/513006))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Mirror the dataspace and crop to the gralloc3 attr_region *(ID: [513005](https://review.lineageos.org/c/513005))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: libexynosgraphicbuffer: Use the shared_metadata offset for the dataspace *(ID: [513004](https://review.lineageos.org/c/513004))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: libexynosgraphicbuffer: Rebuild the handle extension from the wire block *(ID: [513003](https://review.lineageos.org/c/513003))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** exynos: Drop unused libion dependency *(ID: [512990](https://review.lineageos.org/c/512990))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** c2service: Use exynos_ion_get_heap_mask() and drop libion *(ID: [512989](https://review.lineageos.org/c/512989))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Add optional gralloc3 compatible handle layout *(ID: [512850](https://review.lineageos.org/c/512850))*

</details>

## 📱 Línea Motorola Activa (11)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: nova_0flash_mmi: Start boot firmware download on display on *(ID: [512758](https://review.lineageos.org/c/512758))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: nova_0flash_mmi: Make boot firmware delay configurable *(ID: [512757](https://review.lineageos.org/c/512757))*
- **[LineageOS/android_kernel_motorola_sm6225]** techpack: display: msm: fix HBM backlight race with display disable *(ID: [512756](https://review.lineageos.org/c/512756))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: Include MbnOverride in PRODUCT_PACKAGES *(ID: [512988](https://review.lineageos.org/c/512988))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: Add MbnOverride to select modem carrier config per SIM *(ID: [512987](https://review.lineageos.org/c/512987))*
- **[LineageOS/android_device_motorola_mona]** mona: Fix invalid usage of log utility *(ID: [509436](https://review.lineageos.org/c/509436))*
- **[LineageOS/android_device_motorola_miami]** Revert "miami: audio: Add missing Fluence NN mixer paths" *(ID: [513659](https://review.lineageos.org/c/513659))*
- **[LineageOS/android_device_motorola_fogos]** Revert "fogos: audio: Add missing Fluence NN mixer paths" *(ID: [513658](https://review.lineageos.org/c/513658))*
- **[LineageOS/android_device_motorola_fogo]** Revert "fogo: audio: Add missing Fluence NN mixer paths" *(ID: [513657](https://review.lineageos.org/c/513657))*
- **[LineageOS/android_device_motorola_bangkk]** Revert "bangkk: audio: Add missing Fluence NN mixer paths" *(ID: [513656](https://review.lineageos.org/c/513656))*
- **[LineageOS/android_device_motorola_sm6375-common]** sm6375-common: Disable ro.vendor.audio.sdk.fluence.nn.enabled *(ID: [513655](https://review.lineageos.org/c/513655))*

</details>

---
*Generado automáticamente por Ra Pulse*
