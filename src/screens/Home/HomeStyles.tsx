import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    width: 250,
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  card: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.4)",
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    alignItems: "center",
  },
});
