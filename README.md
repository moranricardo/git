# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-11-26-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (234)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_mediatek]** thermal: retry failed watched sensors without an infinite Looper wait *(ID: [515251](https://review.lineageos.org/c/515251))*
- **[LineageOS/android_kernel_ayn_cq8725s]** BACKPORT: thermal: trip: Avoid skipping trips in thermal_zone_set_trips() *(ID: [515273](https://review.lineageos.org/c/515273))*
- **[LineageOS/android_kernel_ayn_cq8725s]** BACKPORT: thermal: trip: Make thermal_zone_set_trips() use trip thresholds *(ID: [515272](https://review.lineageos.org/c/515272))*
- **[LineageOS/android_hardware_motorola]** packages: Add MbnOverride to select modem carrier config per SIM *(ID: [514838](https://review.lineageos.org/c/514838))*
- **[LineageOS/android_hardware_google_pixel]** libperfmgr: force rewrite after a partially failed FileNode transition *(ID: [515260](https://review.lineageos.org/c/515260))*
- **[LineageOS/android_hardware_lineage_interfaces]** vibrator: aidl-legacy: initialize and guard mDevice *(ID: [515256](https://review.lineageos.org/c/515256))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** usb: amlogic: Restore the USB role after system resume *(ID: [515247](https://review.lineageos.org/c/515247))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** mmc: meson-g12a: Preserve tuned SDR104/TDMA registers across requests *(ID: [515243](https://review.lineageos.org/c/515243))*
- **[LineageOS/android_hardware_interfaces]** healthloop: do not re-arm the wake alarm that woke the loop *(ID: [515249](https://review.lineageos.org/c/515249))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: nicepool: Add Freebox Pop IR power keymap *(ID: [515244](https://review.lineageos.org/c/515244))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: sti6130d3x0: Match stock 308M codec_mm_cma size *(ID: [514921](https://review.lineageos.org/c/514921))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: sti6130d3x0: Fix gpioleds with stock LED GPIOs *(ID: [514920](https://review.lineageos.org/c/514920))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: sti6130d3x0: Restore stock 846MHz GPU DVFS table *(ID: [514919](https://review.lineageos.org/c/514919))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: sti6130d3x0: Remove broken pcie_A override *(ID: [514918](https://review.lineageos.org/c/514918))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: sti6130d3x0: Disable USB2 LPM on dwc3 *(ID: [514917](https://review.lineageos.org/c/514917))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: sti6130d3x0: Enable ee_cec on aocec *(ID: [514916](https://review.lineageos.org/c/514916))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: sti6130d3x0: Add stock HDMI-TX HPD/DDC GPIOs *(ID: [514915](https://review.lineageos.org/c/514915))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: nicepool: Enable USB role switching *(ID: [514914](https://review.lineageos.org/c/514914))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: nicepool: Enable SD-card UART pinctrl states *(ID: [514913](https://review.lineageos.org/c/514913))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Remove broken pcie_A and unused U212 peripheral nodes *(ID: [514912](https://review.lineageos.org/c/514912))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Remove stale U212 gpioleds node *(ID: [514911](https://review.lineageos.org/c/514911))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Remove dead dummy-battery/charger and unused regulators *(ID: [514910](https://review.lineageos.org/c/514910))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Remove dead 4.9 fbdev, deinterlace, and vdin nodes *(ID: [514909](https://review.lineageos.org/c/514909))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Fix unifykey status and add stock Freebox keys *(ID: [514908](https://review.lineageos.org/c/514908))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Drop unused 4.9 interrupt properties from gpio_keypad *(ID: [514907](https://review.lineageos.org/c/514907))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Clean up audio nodes and align with stock 4.9 *(ID: [514906](https://review.lineageos.org/c/514906))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Remove non-working 4.9 dvb-demux node *(ID: [514905](https://review.lineageos.org/c/514905))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: g12/sm1: Enable all 4 output lanes on tdmc *(ID: [514904](https://review.lineageos.org/c/514904))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: g12a: Add pinctrl groups for SD-card UART switching *(ID: [514903](https://review.lineageos.org/c/514903))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: g12a: Sync minor DTS cleanups with mesong12b *(ID: [514902](https://review.lineageos.org/c/514902))*

</details>

## 📱 Línea Motorola Activa (73)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_rtwo]** rtwo: Add carrier-specific CarrierConfig overlay support *(ID: [515268](https://review.lineageos.org/c/515268))*
- **[LineageOS/android_hardware_motorola]** packages: Add MbnOverride to select modem carrier config per SIM *(ID: [514838](https://review.lineageos.org/c/514838))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: Use MotoExtTelephony for MBN override *(ID: [515184](https://review.lineageos.org/c/515184))*
- **[LineageOS/android_kernel_motorola_lyriq_manifest]** manifest: Update kernel revision to 2026-10 *(ID: [515241](https://review.lineageos.org/c/515241))*
- **[LineageOS/android_device_motorola_lyriq]** lyriq: Drop MediaTek MEOW EGL *(ID: [515240](https://review.lineageos.org/c/515240))*
- **[LineageOS/android_device_motorola_lyriq]** lyriq: Move to mmd for zRAM setup *(ID: [515239](https://review.lineageos.org/c/515239))*
- **[LineageOS/android_device_motorola_lyriq]** lyriq: wifi: Restore ctrl_interface in wpa_supplicant.conf *(ID: [515238](https://review.lineageos.org/c/515238))*
- **[LineageOS/android_device_motorola_lyriq-kernels]** lyriq: Add touch support in recovery *(ID: [515235](https://review.lineageos.org/c/515235))*
- **[LineageOS/android_device_motorola_lyriq-kernels]** lyriq: Load mt635x-auxadc.ko in recovery ramdisk *(ID: [515234](https://review.lineageos.org/c/515234))*
- **[LineageOS/android_kernel_motorola_lyriq-modules]** power: supply: mtk-battery-manager: Disable TIME_TO_FULL_NOW with MM8013 *(ID: [515233](https://review.lineageos.org/c/515233))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: recovery: Support Motorola's super_modem partition *(ID: [515162](https://review.lineageos.org/c/515162))*
- **[LineageOS/android_kernel_motorola_sm6375]** input: touchscreen: ili9882_mmi: Fix bad #elif *(ID: [515180](https://review.lineageos.org/c/515180))*
- **[LineageOS/android_kernel_motorola_sm6375]** arm64: configs: cypfq: Build moto kernel modules *(ID: [515179](https://review.lineageos.org/c/515179))*
- **[LineageOS/android_kernel_motorola_sm6375]** input: touchscreen: ili9882_mmi: Fix strict-prototypes error *(ID: [515178](https://review.lineageos.org/c/515178))*
- **[LineageOS/android_kernel_motorola_sm6375]** treewide: Setup inline build for cypfq modules *(ID: [515177](https://review.lineageos.org/c/515177))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: audio: Add more sampling rates to voip_{rx,tx} *(ID: [515175](https://review.lineageos.org/c/515175))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Enable assistant key customization *(ID: [515174](https://review.lineageos.org/c/515174))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Update audio configs from stock *(ID: [515173](https://review.lineageos.org/c/515173))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Update permissions *(ID: [515172](https://review.lineageos.org/c/515172))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Update ODM sku manifests *(ID: [515171](https://review.lineageos.org/c/515171))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Update overlays *(ID: [515170](https://review.lineageos.org/c/515170))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Build AIDL ST NFC HAL *(ID: [515169](https://review.lineageos.org/c/515169))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Update init scripts *(ID: [515168](https://review.lineageos.org/c/515168))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Clear LIBNATIVEWINDOW symbol versions for libBSTSWAD *(ID: [515167](https://review.lineageos.org/c/515167))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Update to S2RYAS32.58-13-12-5-1-7 *(ID: [515166](https://review.lineageos.org/c/515166))*
- **[LineageOS/android_device_motorola_cypfq]** cypfq: Update partition size *(ID: [515165](https://review.lineageos.org/c/515165))*
- **[LineageOS/android_device_motorola_cypfq]** fogo: Rebrand to cypfq *(ID: [515164](https://review.lineageos.org/c/515164))*
- **[LineageOS/android_kernel_motorola_sm8475]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-24.0 *(ID: [515163](https://review.lineageos.org/c/515163))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Drop unused Wi-Fi configs *(ID: [515161](https://review.lineageos.org/c/515161))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: nova_0flash_mmi: Start firmware update immediately *(ID: [514888](https://review.lineageos.org/c/514888))*

</details>

---
*Generado automáticamente por Ra Pulse*
