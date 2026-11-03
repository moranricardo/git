# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-11-03-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (204)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_frameworks_base]** Fix BAL bypass via pinned windows in SDK sandbox and PCC *(ID: [511831](https://review.lineageos.org/c/511831))*
- **[LineageOS/android_frameworks_base]** Fix BAL bypass in RemoteViews SetRadioGroupCheckedAction reapply *(ID: [511828](https://review.lineageos.org/c/511828))*
- **[LineageOS/android_hardware_nxp_nfc]** Fix infinite loop and logcat spam in NXP NFC HAL teardown *(ID: [508039](https://review.lineageos.org/c/508039))*
- **[LineageOS/android_hardware_nxp_nfc]** Fix heap use-after-free in NXP NFC HAL *(ID: [508038](https://review.lineageos.org/c/508038))*
- **[LineageOS/android_hardware_interfaces]** Add model input/output out-of-bounds validation tests *(ID: [508037](https://review.lineageos.org/c/508037))*
- **[LineageOS/android_hardware_interfaces]** Fix CAS HAL integer truncation vulnerability *(ID: [508036](https://review.lineageos.org/c/508036))*
- **[LineageOS/android_frameworks_opt_telephony]** ImsPhone: Catch RuntimeException and fix P-Associated-URI parse *(ID: [508034](https://review.lineageos.org/c/508034))*
- **[LineageOS/android_frameworks_opt_telephony]** Fix RCS config credential leak via ISub *(ID: [508033](https://review.lineageos.org/c/508033))*
- **[LineageOS/android_kernel_qcom_sm8450]** Merge branch 'android12-5.10-lts' of https://android.googlesource.com/kernel/common into android13-5.10-waipio *(ID: [511798](https://review.lineageos.org/c/511798))*
- **[LineageOS/android_kernel_motorola_sm8475]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-24.0 *(ID: [511818](https://review.lineageos.org/c/511818))*
- **[LineageOS/android_kernel_motorola_sm7435]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-23.2 *(ID: [511817](https://review.lineageos.org/c/511817))*
- **[LineageOS/android_device_amlogic_g12-common]** g12: Fix voldmanaged USB glob for the Amlogic xHCI name *(ID: [496038](https://review.lineageos.org/c/496038))*
- **[LineageOS/android_kernel_qcom_sm8750]** mm/cma: add sysfs file 'release_pages_success' *(ID: [509989](https://review.lineageos.org/c/509989))*
- **[LineageOS/android_hardware_ayn]** sepolicy: Label qc7790s uart wakeup *(ID: [511810](https://review.lineageos.org/c/511810))*
- **[LineageOS/android_kernel_qcom_sm8550]** mm/cma: add sysfs file 'release_pages_success' *(ID: [509988](https://review.lineageos.org/c/509988))*
- **[LineageOS/android_hardware_ayn]** sepolicy: Let time daemon read sys.boot_completed *(ID: [511807](https://review.lineageos.org/c/511807))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: meson-g12a: Update VPU clk_level to 8 (666.7MHz) *(ID: [511801](https://review.lineageos.org/c/511801))*
- **[LineageOS/android_kernel_osom_sm8475]** Merge remote-tracking branch 'sm8450/lineage-20' into HEAD *(ID: [511806](https://review.lineageos.org/c/511806))*
- **[LineageOS/android_kernel_ayn_cq8725s]** Merge remote-tracking branch 'sm8750/lineage-22.2' into HEAD *(ID: [511804](https://review.lineageos.org/c/511804))*
- **[LineageOS/android_kernel_ayn_qcs8550]** Merge remote-tracking branch 'sm8550/lineage-21' into HEAD *(ID: [511805](https://review.lineageos.org/c/511805))*
- **[LineageOS/android_kernel_qcom_sm8750]** Merge remote-tracking branch 'common/android15-6.6-lts' into HEAD *(ID: [511802](https://review.lineageos.org/c/511802))*
- **[LineageOS/android_kernel_qcom_sm8550]** Merge remote-tracking branch 'common/android13-5.15-lts' into HEAD *(ID: [511803](https://review.lineageos.org/c/511803))*
- **[LineageOS/android_kernel_qcom_sm8650]** Merge branch 'android14-6.1-lts' of https://android.googlesource.com/kernel/common into android15-6.1-lanai *(ID: [511800](https://review.lineageos.org/c/511800))*
- **[LineageOS/android_kernel_qcom_sm8650]** Revert "coresight-tmc-etf: fix failure to disable/enable ETF after reading" *(ID: [511799](https://review.lineageos.org/c/511799))*
- **[LineageOS/android_external_aac]** Fix UAF in CreatePsDec reset branch *(ID: [507977](https://review.lineageos.org/c/507977))*
- **[LineageOS/android_development]** RESTRICT AUTOMERGE: Fix integer underflow vulnerability in PduParser *(ID: [507976](https://review.lineageos.org/c/507976))*
- **[LineageOS/android_external_avb]** Fix silent failure in RSA verification on memory allocation error *(ID: [507978](https://review.lineageos.org/c/507978))*
- **[LineageOS/android_external_hplip]** Fix sprintf and strncpy usage *(ID: [507979](https://review.lineageos.org/c/507979))*
- **[LineageOS/android_external_libpng]** fix: Initialize tail bytes in `trans_alpha` buffers *(ID: [507982](https://review.lineageos.org/c/507982))*
- **[LineageOS/android_external_libpng]** fix: Resolve use-after-free on `png_ptr->trans_alpha` *(ID: [507981](https://review.lineageos.org/c/507981))*

</details>

## 📱 Línea Motorola Activa (12)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_fogos]** fogos: Add missing camera libraries *(ID: [511833](https://review.lineageos.org/c/511833))*
- **[LineageOS/android_device_motorola_fogo]** fogo: Add missing camera libraries *(ID: [511826](https://review.lineageos.org/c/511826))*
- **[LineageOS/android_device_motorola_milanf]** milanf: Add missing camera libraries *(ID: [511622](https://review.lineageos.org/c/511622))*
- **[LineageOS/android_device_motorola_rhodep]** rhodep: Add missing camera libraries *(ID: [511625](https://review.lineageos.org/c/511625))*
- **[LineageOS/android_device_motorola_miami]** miami: Add missing camera libraries *(ID: [511618](https://review.lineageos.org/c/511618))*
- **[LineageOS/android_device_motorola_fogos]** fogos: Add missing anc blobs for camera *(ID: [511615](https://review.lineageos.org/c/511615))*
- **[LineageOS/android_kernel_motorola_sm8475]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-24.0 *(ID: [511818](https://review.lineageos.org/c/511818))*
- **[LineageOS/android_kernel_motorola_sm7435]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-23.2 *(ID: [511817](https://review.lineageos.org/c/511817))*
- **[LineageOS/android_device_motorola_fogo]** fogo: Add missing anc blobs for camera *(ID: [511613](https://review.lineageos.org/c/511613))*
- **[LineageOS/android_device_motorola_bangkk]** bangkk: Add missing camera libraries *(ID: [511608](https://review.lineageos.org/c/511608))*
- **[LineageOS/android_device_motorola_bangkk]** bangkk: Add missing anc blobs for camera *(ID: [511607](https://review.lineageos.org/c/511607))*
- **[LineageOS/android_kernel_motorola_sm7325]** arm64: dts: qcom: berlna,xpeng: fix double tap to wake on upstream touch drivers *(ID: [510998](https://review.lineageos.org/c/510998))*

</details>

---
*Generado automáticamente por Ra Pulse*
