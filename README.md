# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-11-10-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (140)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_kernel_qcom_sm8350]** BACKPORT: posix-cpu-timers: Cleanup CPU timers before freeing them during exec *(ID: [512817](https://review.lineageos.org/c/512817))*
- **[LineageOS/android_kernel_qcom_sm8350]** ANDROID: 16K: Fix padding calculation during VMA split *(ID: [512815](https://review.lineageos.org/c/512815))*
- **[LineageOS/android_kernel_qcom_sm8350]** ANDROID: 16K: Allow VMAs with all padding pages. *(ID: [512814](https://review.lineageos.org/c/512814))*
- **[LineageOS/android_kernel_qcom_sm8350]** ipv4: validate checksum_start before completing checksum *(ID: [512830](https://review.lineageos.org/c/512830))*
- **[LineageOS/android_kernel_qcom_sm8350]** netfilter: nfnetlink_queue: unbreak SCTP traffic *(ID: [512829](https://review.lineageos.org/c/512829))*
- **[LineageOS/android_kernel_qcom_sm8350]** net: add inline function skb_csum_is_sctp *(ID: [512828](https://review.lineageos.org/c/512828))*
- **[LineageOS/android_kernel_qcom_sm8350]** ipv4: free inet_opt and ireq_opt after an RCU grace period *(ID: [512827](https://review.lineageos.org/c/512827))*
- **[LineageOS/android_kernel_qcom_sm8350]** net: tun: bound receive headroom *(ID: [512826](https://review.lineageos.org/c/512826))*
- **[LineageOS/android_kernel_qcom_sm8350]** inet: frags: strip GSO state from fragments before reassembly *(ID: [512825](https://review.lineageos.org/c/512825))*
- **[LineageOS/android_kernel_qcom_sm8350]** crypto: ecc - Fix carry overflow in vli multiplication *(ID: [512824](https://review.lineageos.org/c/512824))*
- **[LineageOS/android_kernel_qcom_sm8350]** crypto: drbg - Fix returning success on failure in CTR_DRBG *(ID: [512823](https://review.lineageos.org/c/512823))*
- **[LineageOS/android_kernel_qcom_sm8350]** tipc: fix bc_ackers underflow on duplicate GRP_ACK_MSG *(ID: [512822](https://review.lineageos.org/c/512822))*
- **[LineageOS/android_kernel_qcom_sm8350]** netfilter: nf_conntrack_h323: check for zero length in DecodeQ931() *(ID: [512821](https://review.lineageos.org/c/512821))*
- **[LineageOS/android_kernel_qcom_sm8350]** af_unix: Fix UAF read of tail->len in unix_stream_data_wait() *(ID: [512820](https://review.lineageos.org/c/512820))*
- **[LineageOS/android_kernel_qcom_sm8350]** ANDROID: fuse-bpf: fix verifier bypass in fuse_prog_is_valid_access *(ID: [512818](https://review.lineageos.org/c/512818))*
- **[LineageOS/android_kernel_qcom_sm8350]** posix-cpu-timers: Fix pid refcount leak in do_cpu_nanosleep() error path *(ID: [512816](https://review.lineageos.org/c/512816))*
- **[LineageOS/android_kernel_motorola_sm8550]** Merge branch 'lineage-21' of github.com:LineageOS/android_kernel_qcom_sm8550 into HEAD *(ID: [512813](https://review.lineageos.org/c/512813))*
- **[LineageOS/android_kernel_motorola_sm8550-devicetrees]** Merge branch 'lineage-21' of github.com:LineageOS/android_kernel_qcom_sm8550-devicetrees into HEAD *(ID: [512812](https://review.lineageos.org/c/512812))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Enable ACDB instance ID support when the ACDB files use it *(ID: [512811](https://review.lineageos.org/c/512811))*
- **[LineageOS/android_hardware_qcom_audio]** hal: Add open source MIUS ultrasound proximity extension *(ID: [512810](https://review.lineageos.org/c/512810))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** hwc: Wire up HDR Meta Plugin *(ID: [512490](https://review.lineageos.org/c/512490))*
- **[LineageOS/android_hardware_samsung]** aidl: gnss: Adapt to Samsung *(ID: [512806](https://review.lineageos.org/c/512806))*
- **[LineageOS/android_hardware_samsung]** aidl: gnss: Drop superfluous AOSP code *(ID: [512807](https://review.lineageos.org/c/512807))*
- **[LineageOS/android_hardware_samsung]** aidl: Import AIDL GNSS Service *(ID: [512805](https://review.lineageos.org/c/512805))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_config]** config: s5e8835: Initial configuration *(ID: [489717](https://review.lineageos.org/c/489717))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_graphics]** libhwc2.1: s5e8835: Adapt to the SoC *(ID: [512486](https://review.lineageos.org/c/512486))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_graphics]** libhwc2.1: s5e8835: Copy from s5e8825 *(ID: [489716](https://review.lineageos.org/c/489716))*
- **[LineageOS/android_kernel_xiaomi_sm8550]** Merge https://github.com/LineageOS/android_kernel_qcom_sm8550 into HEAD *(ID: [512772](https://review.lineageos.org/c/512772))*
- **[LineageOS/android_kernel_qcom_sdm660]** arm64: configs: vendor: Enable CFI *(ID: [512770](https://review.lineageos.org/c/512770))*
- **[LineageOS/android_device_oneplus_sm8850-common]** sm8850-common: Fix Wireless Display casting *(ID: [512759](https://review.lineageos.org/c/512759))*

</details>

## 📱 Línea Motorola Activa (37)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_kernel_motorola_sm8550]** Merge branch 'lineage-21' of github.com:LineageOS/android_kernel_qcom_sm8550 into HEAD *(ID: [512813](https://review.lineageos.org/c/512813))*
- **[LineageOS/android_kernel_motorola_sm8550-devicetrees]** Merge branch 'lineage-21' of github.com:LineageOS/android_kernel_qcom_sm8550-devicetrees into HEAD *(ID: [512812](https://review.lineageos.org/c/512812))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: Drop BOARD_MOVE_GSI_AVB_KEYS_TO_VENDOR_BOOT *(ID: [510940](https://review.lineageos.org/c/510940))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: fstab: Drop AVB keys *(ID: [510643](https://review.lineageos.org/c/510643))*
- **[LineageOS/android_kernel_motorola_sm6225]** techpack: display: msm: fix HBM backlight race with display disable *(ID: [512756](https://review.lineageos.org/c/512756))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: nova_0flash_mmi: Start boot firmware download on display on *(ID: [512758](https://review.lineageos.org/c/512758))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: nova_0flash_mmi: Make boot firmware delay configurable *(ID: [512757](https://review.lineageos.org/c/512757))*
- **[LineageOS/android_kernel_motorola_sm6225]** arm64: configs: guamna: Disable FocalTech double tap and panel notifications *(ID: [512755](https://review.lineageos.org/c/512755))*
- **[LineageOS/android_kernel_motorola_sm8250]** ARM64: dts: kiev: Rename sound card for the CAF audio HAL *(ID: [511669](https://review.lineageos.org/c/511669))*
- **[LineageOS/android_device_motorola_kiev]** kiev: audio: Add the class AB headphone path *(ID: [511668](https://review.lineageos.org/c/511668))*
- **[LineageOS/android_device_motorola_kiev]** kiev: audio: Install platform info for the lagoon QRD card *(ID: [511667](https://review.lineageos.org/c/511667))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Drop unused audio feature flags *(ID: [511666](https://review.lineageos.org/c/511666))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Disable fluence in calls *(ID: [511664](https://review.lineageos.org/c/511664))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Build audio & soundtrigger HALs from source *(ID: [511663](https://review.lineageos.org/c/511663))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Switch to qcom audio effects *(ID: [511662](https://review.lineageos.org/c/511662))*
- **[LineageOS/android_device_motorola_kiev]** kiev: audio_amplifier: Use hw_module_t->dso instead of RTLD_NEXT *(ID: [511661](https://review.lineageos.org/c/511661))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Convert audio_amplifier to blueprint *(ID: [511660](https://review.lineageos.org/c/511660))*
- **[LineageOS/android_device_motorola_kiev]** kiev: audio_amplifier: Make all the functions static *(ID: [511659](https://review.lineageos.org/c/511659))*
- **[LineageOS/android_device_motorola_kiev]** kiev: audio_amplifier: Fix PCM device check *(ID: [511658](https://review.lineageos.org/c/511658))*
- **[LineageOS/android_device_motorola_kiev]** kiev: amplifier: Add amplifier usecase to head of usecase list *(ID: [511657](https://review.lineageos.org/c/511657))*
- **[LineageOS/android_device_motorola_kiev]** kiev: amplifier: Clean up makefile *(ID: [511656](https://review.lineageos.org/c/511656))*
- **[LineageOS/android_device_motorola_kiev]** kiev: amplifier: Rebrand to AW882xx *(ID: [511655](https://review.lineageos.org/c/511655))*
- **[LineageOS/android_device_motorola_kiev]** kiev: amplifier: Fix device list initializations *(ID: [511654](https://review.lineageos.org/c/511654))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Add custom audio amplifier for TFA amp feedback *(ID: [511653](https://review.lineageos.org/c/511653))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Add proprietary-firmware.txt *(ID: [511652](https://review.lineageos.org/c/511652))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Properly patch camera postproc impl *(ID: [511651](https://review.lineageos.org/c/511651))*
- **[LineageOS/android_device_motorola_kiev]** kiev: Drop MotCamera3 *(ID: [511665](https://review.lineageos.org/c/511665))*
- **[LineageOS/android_hardware_motorola]** MotoActions: Add open to answer action *(ID: [509260](https://review.lineageos.org/c/509260))*
- **[LineageOS/android_device_motorola_smith]** smith: Support concurrent and rear display modes *(ID: [512107](https://review.lineageos.org/c/512107))*
- **[LineageOS/android_device_motorola_sm7325-common]** sm7325-common: init: Add back loc_launcher *(ID: [512481](https://review.lineageos.org/c/512481))*

</details>

---
*Generado automáticamente por Ra Pulse*
