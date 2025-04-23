// components/CharacterModal.tsx
import React from "react";
import {
  Modal,
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (uri: string) => void;
  imageOptions: string[];
};

export default function CharacterModal({
  visible,
  onClose,
  onSelect,
  imageOptions,
}: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Επέλεξε εικόνα προφίλ</Text>
          <FlatList
            data={imageOptions}
            numColumns={2}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable onPress={() => onSelect(item)}>
                <Image source={{ uri: item }} style={styles.optionImage} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  optionImage: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
});
